<template>
  <v-container class="container">
    You got to the user page. good for you. {{ userId }}
    <LoginForm />
  </v-container>
</template>

<script>
import LoginForm from "../components/LoginForm.vue"
export default {
  components: {LoginForm},
  props: ["userId"],
};
</script>
