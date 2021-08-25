<template>
  <v-card color="red lighten-2" dark class="searchBar">
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :items="states"
        persistent-hint
        prepend-icon="mdi-city"
        label="Where do you live?"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition mode="out-in">
            <v-icon></v-icon>
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
      <v-btn>F&B</v-btn>
      <v-btn>Services</v-btn>
      <v-btn>Shops</v-btn>
    </v-card-text>
      <v-btn elevation="2" fab color="primary" class="fabBtn">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      model: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };
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
