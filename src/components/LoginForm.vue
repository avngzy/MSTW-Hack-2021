<template>
  <v-card :loading="loading" class="mx-auto my-12 form" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title><h2>Sign Up</h2></v-card-title>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        required
      ></v-text-field>

      <v-card-subtitle>
        Already Have An Account?
      </v-card-subtitle>

      <v-card-actions>
        <v-row>
          <v-col cols="8">
            <v-btn color="error" class="mr-4" @click="reset">
              <v-icon>
                mdi-cancel
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              <v-icon>
                mdi-check-circle
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-form>
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    loading: false,
    selection: 1,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.form {
  border: solid red;
  width: 85%;
  padding: 2rem;
}
</style>
