<template>
  <q-page class="container q-ma-xl">
    <div class="row gutter-sm">
      <div class="row q-ma-md" v-for="(posts, index) in posts" :key="index">
        <q-card>
          <q-img :src="posts.img" style="width: 200px" />
          <q-card-section>
            <!-- <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">{{ posts.name }}</div>
              <div class="col text-h6 ellipsis">{{ posts.level }}</div>
            </div> -->
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ posts.name }}</div>
            <div class="text-caption text-grey">{{ posts.level }}</div>
          </q-card-section>
          <q-card-actions>
            <!-- <q-btn flat round icon="event" /> -->
            <q-btn push color="primary" class="full-width"> Detalhes </q-btn>
            <!-- <q-btn flat color="primary"> Visualizar </q-btn> -->
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
export default {
  name: "PostsD",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$q.loading.show({
        delay: 400, // ms
      });

      this.$axios
        .get("https://digimon-api.vercel.app/api/digimon/")
        .then((res) => {
          this.posts = res.data;
          this.$q.loading.hide();
          console.log("POSTS", res.data);
        })
        .catch((err) => {
          this.$q.loading.hide();
          console.error(err);
        });
    },
  },
};
</script>
