import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import { router } from './router'
import { store } from './store'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
