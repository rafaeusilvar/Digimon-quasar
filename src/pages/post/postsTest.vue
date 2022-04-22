<template>
  <div>
    <form>
      <input type="text" v-model="input_name" />
      <input type="submit" value="Enviar" v-on:click="submitForm" />
    </form>
  </div>
  <div>
    <!-- <InfiniteScrool /> -->
    <h2>
      <!-- {{ NomeAplicacao }} -->
    </h2>
  </div>
  <div class="col-md-7" v-for="(DadosApi, index) of DadosApi" :key="index">
    <q-card
      id="q-card"
      class="shadow-10"
      style="background: radial-gradient(circle, #082f4f 0%, #014a88 100%)"
    >
      <q-img :ratio="16 / 9" id="urlToImage" :src="DadosApi.urlToImage">
      </q-img>
      <q-card-section class="q-pt-none">
        <div id="title" class="row text-title justify-center text-white">
          {{ DadosApi.title }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import InfiniteScrool from "components/infiniteScrool.vue";
import { api } from "boot/axios";

export default {
  data() {
    return {
      nome: "",
      NomeAplicacao: "Olá mundo",
      DadosApi: [],
      input_name: "",
    };
  },
  mounted() {
    this.getinfoAPI();
  },
  methods: {
    submitForm(e) {
      e.addEventListener("click"), (this.nome = this.input_name);
      console.log(this.input_name);
    },
    async getinfoAPI() {
      // incio de data formata para buscar a noticia mais atual
      let data = new Date();
      let dataFormatada =
        data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();
      console.log(dataFormatada);
      //exemplo de saída: 2020-1-29
      // final de data formatada
      this.$q.loading.show({
        delay: 400, // ms
      });
      // inicio de get newsApi
      try {
        const response = await api.get("everything", {
          params: {
            language: "pt",
            q: `a + ${this.nome}`,
            from: `${dataFormatada}`, // data
            sortBy: "popularity",
          },
        });
        this.DadosApi = response.data.articles;
        console.log(response.data.articles);
        // final de get newsApi
        this.$q.loading.hide();
      } catch (error) {
        alert(error);
      }
    },
  },
  components: {
    // InfiniteScrool,
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











