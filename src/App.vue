<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="align-center d-flex">
          <h2 @click="page = 0" class="white--text text-no-wrap" style="user-select: none">The Shelf Life</h2>
      </div>

      <v-divider class="pl-4 pr-4" inset vertical/>
    <v-tabs
      background-color="primary"
      center-active
      dark
    >
      <v-tab @click="page = 1">Blog</v-tab>
      <v-tab @click="page = 2">Instagram</v-tab>
      <v-tab @click="page = 3">Tik Tok</v-tab>
      <v-tab @click="page = 4">Bio</v-tab>
      <v-tab @click="page = 5">Merch</v-tab>

    </v-tabs>
      <v-spacer/>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        light
      >
        <span class="mr-2 white--text">Latest Post</span>
        <v-icon color="white">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Home v-if="page === 0"/>
      <Blog v-else-if="page === 1"/>
      <Instagram v-else-if="page === 2"/>
      <Tiktok v-else-if="page === 3"/>
      <About v-else-if="page === 4"/>
      <Merch v-else-if="page === 5"/>
      <Notfound v-else/>

    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Instagram from './components/Instagram';
import About from './components/About';
import Tiktok from './components/Tiktok';
import Merch from './components/Merch';
import Notfound from './components/Notfound';
import Blog from './components/Blog'

export default {
  name: 'App',

  components: {
    Home,
    Instagram,
    About,
    Tiktok,
    Merch,
    Blog,
    Notfound
  },

  data: () => ({
      page: 0
  }),
};
</script>
