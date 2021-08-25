import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire' // Added to make vuefire work
import * as VueGoogleMaps from "vue2-google-maps" // Import package

Vue.config.productionTip = false
Vue.use(firestorePlugin);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCLdsgGTdt-iCzbM0bIJUmnUt69TKxWpQw",
    libraries: "places"
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
