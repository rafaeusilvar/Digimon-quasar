  <template>
  <q-page class="container q-ma-xl">
    <div class="row gutter-sm">
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div
          class="col-md-7"
          v-for="(DadosApi, index) of DadosApi"
          :key="index"
        >
          <q-card
            id="q-card"
            class="shadow-10"
            style="
              background: radial-gradient(circle, #082f4f 0%, #014a88 100%);
            "
          >
            <q-img :ratio="16 / 9" id="urlToImage" :src="DadosApi.urlToImage">
            </q-img>
            <q-card-section class="q-pt-none">
              <div id="title" class="row text-title justify-center text-white">
                {{ DadosApi.title }}
              </div>
              <div id="description" class="text-caption text-grey text-center">
                {{ DadosApi.description }}
              </div>
            </q-card-section>
            <q-card-actions class="row justify-center q-my-md">
              <div class="row text-caption text-grey text-center">
                {{ DadosApi.source.name }}
              </div>
              <q-btn
                v-bind:href="DadosApi.url"
                target="_blank"
                size="12px"
                class="row btn-fixed-width full-width"
                color="blue-7"
                label="Detalhes"
                icon="newspaper"
              />
            </q-card-actions>
          </q-card>
        </div>
        <template v-slot:loading>
          <!-- <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div> -->
        </template>
      </q-infinite-scroll>
    </div>
  </q-page>
</template>
<script>
import { api } from "boot/axios";

export default {
  name: "infoApi",
  data() {
    return {
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
            category: "science",
          },
        });
        this.DadosApi = response.data.articles;
        this.$q.loading.hide();
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100;400&display=swap");
#urlToImage {
  width: 50rem;
}
#q-card {
  padding-top: 3rem;
}
#title {
  font-size: 1rem;
  font-family: "M PLUS 1";
  color: #000;
  padding-top: 1rem;
  padding-block-end: 1.4rem;
}
#description {
  color: #333;
}
#urlToImage {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 700px) {
  #urlToImage {
    display: flex;
    padding-left: auto;
    padding-right: auto;
    width: 270px;
  }
}
</style>
