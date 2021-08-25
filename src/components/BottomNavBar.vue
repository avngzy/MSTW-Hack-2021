<template>
  <v-bottom-navigation :value="value" color="teal" grow>
    <v-btn>
      <span>Shops</span>
      <router-link to="/">
        <v-icon>mdi-basket</v-icon>
      </router-link>
    </v-btn>

    <v-btn>
      <span>Covid Map</span>
      <router-link to="/about">
        <v-icon>mdi-map-marker</v-icon>
      </router-link>
    </v-btn>

    <v-btn>
      <span>Account</span>
      <router-link to="/user/1">
        <v-icon>mdi-account</v-icon>
      </router-link>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavBar",
  data: () => ({ value: 1 }),
};
</script>

<style></style>
