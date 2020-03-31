/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import './../node_modules/animate.css/animate.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import router from './router.js';
import { store } from "./store.js"
import firebase from "firebase"
import "./firebase.js"

// vue sweetalert
const vueSweetAlertOptions = {
  showClass: {
    popup: "animated fadeIn faster"
  },
  hideClass: {
    popup: ""
  }
};
Vue.use(VueSweetalert2, vueSweetAlertOptions);



Vue.config.productionTip = false;
firebase.auth().onAuthStateChanged(user => {
  new Vue({
    render: h => h(App),
    store: store,
    router: router,
  }).$mount('#app')
});