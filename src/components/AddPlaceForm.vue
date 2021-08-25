<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" fab dark v-bind="attrs" v-on="on" class="fabBtn">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Add A Place</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            label="SME Name*"
            v-model="name"
            required
          ></v-text-field>
          <v-select
            :items="['F&B', 'Services', 'Shop']"
            label="SME Type*"
            v-model="type"
            required
          ></v-select>
          <v-text-field
            label="Secondary Type"
            v-model="secondaryType"
          ></v-text-field>
          <v-text-field label="Location*" v-model="location" required></v-text-field>
          <v-text-field label="Email*" v-model="email" required></v-text-field>
          <v-text-field
            label="Contact*"
            v-model="contact"
            required
          ></v-text-field>
          <v-text-field label="Image URL" v-model="imageURL"></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Back
        </v-btn>
        <v-btn color="blue darken-1" text @click="handleSubmit()">
          Add Place
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { addPlaceToFirebase } from "../firebase/firebase";
export default {
  name: "AddAPlaceForm",
  data: () => ({
    dialog: false,
    name: "",
    type: "",
    secondaryType: "",
    location: "",
    email: "",
    contact: "",
    imageURL: "",
  }),
  methods: {
    handleSubmit() {
        this.dialog = false;
        addPlaceToFirebase({
          name: this.name,
          type: this.type,
          secondaryType: this.secondaryType,
          email: this.email,
          contact: this.contact,
          location: this.location,
          imageURL: this.imageURL,
        }).catch(console.log);
    },
  },
};
</script>

<style scoped>
.fabBtn {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
</style>
