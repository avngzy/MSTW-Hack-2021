<template>
  <v-container class="container">
    <!-- <LoginForm /> -->
    <UserPage />
  </v-container>
</template>

<script>
// import LoginForm from "../components/LoginForm.vue";
import UserPage from "../components/UserPage.vue";
export default {
  components: {   UserPage },
  props: ["userId"],
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid red;
}
</style>
