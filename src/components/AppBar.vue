<template>
  <div class="appBar">
    <v-app-bar color="primary" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ReSME</v-toolbar-title>

      <v-spacer></v-spacer>

     

      <v-menu left bottom>
       

      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
.appBar {
  z-index: 1;
  width: 100vw;
}
</style>
