import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import { firestorePlugin } from 'vuefire' // Added to make vuefire work
import VuetifyGoogleAutocomplete from "vuetify-google-autocomplete";
// import { auth } from "./firebase/firebase.js" // for authentication

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(VueGoogleMaps, {
  load: {
<<<<<<< HEAD
    key: "AIzaSyCLdsgGTdt-iCzbM0bIJUmnUt69TKxWpQw",
=======
    key: process.env.VUE_APP_GMAP_API_KEY,
>>>>>>> 00b6d04a87e96d842e59b5ef8909e9619eca71bd
    libraries: "places",
  },
});

Vue.use(VuetifyGoogleAutocomplete, {
  vueGoogleMapsCompatibility: true,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
