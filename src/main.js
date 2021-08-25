import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import VuetifyGoogleAutocomplete from "vuetify-google-autocomplete";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAP_API_KEY,
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
