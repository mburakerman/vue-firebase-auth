import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import { store } from "./store.js"
import './../node_modules/bulma/css/bulma.css';
import "./firebase.js"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: router,
}).$mount('#app')
