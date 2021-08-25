import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import { firestorePlugin } from 'vuefire' // Added to make vuefire work
import VuetifyGoogleAutocomplete from "vuetify-google-autocomplete";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB60f_kvHt8EJZgYa3lxkGMWQrXLxGk2jk",
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
