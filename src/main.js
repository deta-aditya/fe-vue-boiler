import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync';

import App from './App.vue'
import routes from './routes'
import states from './store'

Vue.use(Vuex)
const store = new Vuex.Store(states)

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,
})

sync(store, router, {
  moduleName: 'Router'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
