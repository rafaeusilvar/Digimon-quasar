<template>
  <div class="buscador">
    <input v-model="msg" />
    <button v-on:click="notify">Pesquisar</button>
    <!-- <input type="text" name="buscador" v-model="termo" placeholder="Buscar" /> -->
  </div>
</template>

<script>
export default {
  name: "BuscadorN",
  data() {
    return {
      termo: "",
    };
  },
};
</script>

<style scoped>
</style>
