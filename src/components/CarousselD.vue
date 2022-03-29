<template>
  <div class="q-pa-md">
    <!-- <div v-for="(DadosApi, index) of DadosApi" :key="index"> -->
    <h3 v-for="DadosApi in DadosApi" :key="DadosApi">{{ DadosApi.title }}OI</h3>
    <q-carousel arrows animated v-model="slide" height="400px">
      <q-carousel-slide
        name="first"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">////////////////</div>
          <div class="text-subtitle1">//////////</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <!-- </div> -->
</template>

<script>
import { api } from "boot/axios";
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("first"),
      DadosApi: [],
    };
  },
  mounted() {
    this.getinfoAPI();
  },
  methods: {
    async getinfoAPI() {
      this.$q.loading.show({
        delay: 400, // ms
      });
      try {
        const response = await api.get("top-headlines", {
          params: {
            country: "br",
          },
        });
        this.DadosApi = response.data.articles[4];
        console.log(response.data.articles[1]);
        this.$q.loading.hide();
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
