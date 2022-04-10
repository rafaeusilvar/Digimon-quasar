<template>
  <div>
    <InfiniteScrool />
    <h2>
      {{ NomeAplicacao }}
    </h2>
  </div>
</template>
<script>
import InfiniteScrool from "components/infiniteScrool.vue";
export default {
  data() {
    return {
      NomeAplicacao: "Olá mundo",
    };
  },
  components: {
    InfiniteScrool,
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
