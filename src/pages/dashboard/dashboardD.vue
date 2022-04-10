  <template>
  <q-page id="q-page" class="column items-center">
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
            </q-card-section>
            <div class="row justify-center">
              <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
              />
            </div>
            <q-slide-transition>
              <div v-show="expanded">
                <q-separator />
                <q-card-section class="text-subitle2 text-grey text-center">
                  {{ DadosApi.description }}
                  <q-card-actions class="justify-center q-my-md">
                    <div class="text-caption text-grey text-center">
                      Fonte: {{ DadosApi.source.name }}
                    </div>
                    <q-btn
                      v-bind:href="DadosApi.url"
                      target="_blank"
                      size="12px"
                      class="row btn-fixed-width full-width btn"
                      color="blue-7"
                      label="Detalhes"
                      icon="newspaper"
                    />
                  </q-card-actions>
                </q-card-section>
              </div>
            </q-slide-transition>
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
import { ref } from "vue";

export default {
  name: "infoApi",
  data() {
    return {
      DadosApi: [],
      expanded: ref(false),
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
        this.DadosApi = response.data.articles;
        console.log(response.data.articles);
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
  margin-block-end: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
}
#title {
  text-align: center;
  font-size: 1.4rem;
  font-family: "M PLUS 1";
  padding-top: 1.3rem;
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
  #q-page {
    display: flex;
    justify-items: center;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
  }
  #urlToImage {
    display: flex;
    width: 350px;
  }
  #title {
    font-size: 15px;
  }
}
</style>
