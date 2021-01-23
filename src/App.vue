<template>
  <v-app>
    <v-app-bar
      app
      color="white"
    >
      <v-img @click.native="backToHomePage()" max-height="70" max-width="100" src="./assets/shlef2.png"></v-img>

      <v-divider class="pl-4 pr-4" inset vertical/>
    <v-tabs
      background-color="white"
      center-active
      dark
    >
      <v-tab class="primary--text" to="/blog">Blog</v-tab>
      <v-tab class="primary--text" to="/instagram">Instagram</v-tab>
      <v-tab class="primary--text" to="/tiktok">Tik Tok</v-tab>
      <v-tab class="primary--text" to="/about">Bio</v-tab>
      <v-tab class="primary--text" to="/merch">Merch</v-tab>

    </v-tabs>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
      page: 0
  }),
  methods: {
    backToHomePage () {
        return this.$router.push('/')
    }
  }
};
</script>
