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
