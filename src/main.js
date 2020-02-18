import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA4I8edm83_f83-bdgWsaMoUk9B_zm4x3o",
  authDomain: "cybozu-mission-ec6dc.firebaseapp.com",
  databaseURL: "https://cybozu-mission-ec6dc.firebaseio.com",
  projectId: "cybozu-mission-ec6dc",
  storageBucket: "cybozu-mission-ec6dc.appspot.com",
  messagingSenderId: "772171429448",
  appId: "1:772171429448:web:90596d3138b262fa464a7d"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
