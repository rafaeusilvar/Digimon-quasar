<template>
  <div style="background-color: #073053">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar style="background-color: #02457e">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <q-toolbar-title id="titleSite"> NOTÍCIAS </q-toolbar-title>
          <!-- <BuscadorN /> -->
        </q-toolbar>
      </q-header>
      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list style="color: #024781">
          <q-item-label header>
            <q-list-header>MENU</q-list-header>
          </q-item-label>
          <q-item to="/dashboard">
            <p id="category">PRINCIPAIS NOTÍCIAS</p>
            <q-item-side icon="school" />
            <!-- <q-item-main label="Postagens" sublabel="Lista de postagens"/> -->
          </q-item>
          <q-item to="/science">
            <p>CIÊNCIA</p>
          </q-item>
          <q-item to="/sports">
            <p>ESPORTE</p>
            <q-item-side icon="school" />
          </q-item>
          <q-item to="/entertainment">
            <p>ENTRETENIMENTO</p>
          </q-item>
          <q-item to="/business">
            <p>NEGÓCIOS</p>
          </q-item>
          <q-item to="/health">
            <p>SAÚDE</p>
          </q-item>
          <q-item to="/technology">
            <p>TECNOLOGIA</p>
          </q-item>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
// import BuscadorN from "components/search.vue";
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Github",
    caption: "github.com/rafaeusilvar",
    icon: "code",
    link: "https://github.com/rafaeusilvar",
  },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  {
    title: "Twitter",
    caption: "@rafaeu21k",
    icon: "rss_feed",
    link: "https://twitter.com/rafaeu21k",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    // BuscadorN,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
#titleSite {
  font-family: inherit;
}
#category {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
