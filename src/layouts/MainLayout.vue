<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color:#333">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="text-align:center">
          <!-- SEARCH VEHICLES -->
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
       <q-list-header>Menu</q-list-header>
        </q-item-label>
        <q-item to="/dashboard">
       <p>Home</p>
        <q-item-side icon="school" />
          <!-- <q-item-main label="Postagens" sublabel="Lista de postagens"/> -->
        </q-item>
        <q-item to="/posts">
       <p>Postagens</p>
        <q-item-side icon="school" />
          <!-- <q-item-main label="Postagens" sublabel="Lista de postagens"/> -->
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
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  // {
  //   title: 'Github',
  //   caption: 'github.com/rafaeusilvar',
  //   icon: 'code',
  //   link: 'https://github.com/rafaeusilvar'
  // },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@rafaeu21k',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.com/rafaeu21k'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@rafael.rodrigues',
  //   icon: 'public',
  //   link: 'https://www.facebook.com/rafael.rodrigues.1675275/'
  // }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
