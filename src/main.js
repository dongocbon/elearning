// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from "vue-router"
import VueCookies from "vue-cookies"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
