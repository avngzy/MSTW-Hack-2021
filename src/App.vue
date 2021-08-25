<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <BottomNavBar />
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import BottomNavBar from "./components/BottomNavBar.vue";

export default {
  components: { AppBar, BottomNavBar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
