<template>
  <v-app>
    <v-app-bar
      app
      color="white"
    >
      <div class="align-center d-flex">
          <v-img @click="page = 0" max-height="70" max-width="100" src="./assets/shlef2.png"></v-img>
      </div>

      <v-divider class="pl-4 pr-4" inset vertical/>
    <v-tabs
      background-color="white"
      center-active
      dark
    >
      <v-tab class="primary--text" @click="page = 1">Blog</v-tab>
      <v-tab class="primary--text" @click="page = 2">Instagram</v-tab>
      <v-tab class="primary--text" @click="page = 3">Tik Tok</v-tab>
      <v-tab class="primary--text" @click="page = 4">Bio</v-tab>
      <v-tab class="primary--text" @click="page = 5">Merch</v-tab>

    </v-tabs>
      <v-spacer/>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        light
      >
        <span class="mr-2 primary--text">Latest Post</span>
        <v-icon color="primary">mdi-open-in-new</v-icon>
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
