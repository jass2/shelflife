import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Instagram from './components/Instagram'
import About from './components/about/About'
import Tiktok from './components/Tiktok'
import Merch from './components/Merch'
import Notfound from './components/Notfound'
import Blog from './components/Blog'
import AdminSignIn from './components/admin/AdminSignIn'
import Jason from './components/about/Jason'
import Emma from './components/about/Emma'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/blog', component: Blog },
  { path: '/instagram', component: Instagram },
  { path: '/tiktok', component: Tiktok },
  { path: '/about', component: About },
  { path: '/merch', component: Merch },
  { path: '/admin', component: AdminSignIn },
  { path: '/about/jason', component: Jason },
  { path: '/about/emma', component: Emma },
  { path: '/*', component: Notfound },
]

const router = new VueRouter({
  routes: routes, 
  mode: 'history'
})

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
