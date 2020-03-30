/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import router from './router.js';
import { store } from "./store.js"
import './../node_modules/bulma/css/bulma.css';
import firebase from "firebase"
import "./firebase.js"


Vue.use(VueSweetalert2);
Vue.config.productionTip = false


firebase.auth().onAuthStateChanged(user => {
  new Vue({
    render: h => h(App),
    store: store,
    router: router,
  }).$mount('#app')
});


