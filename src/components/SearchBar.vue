<template>
  <v-card color="red lighten-2" dark class="searchbar">
    <v-card-text>
      <v-autocomplete
        v-model="search"
        :items="states"
        persistent-hint
        prepend-icon="mdi-city"
        label="Where do you live?"
        @change="emitSearch()"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition mode="out-in">
            <v-icon></v-icon>
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
      <v-btn-toggle
        v-model="toggledBtns"
        tile
        color="secondary"
        group
        multiple
        @change="emitSearch()"
      >
        <v-btn value="F&B">
          F&B
        </v-btn>
        <v-btn value="Services">
          Services
        </v-btn>
        <v-btn value="Shop">
          Shops
        </v-btn>
      </v-btn-toggle>
    </v-card-text>
    <AddAPlaceForm />
  </v-card>
</template>

<script>
import AddAPlaceForm from "../components/AddPlaceForm.vue";

export default {
  name: "SearchBar",
  components: { AddAPlaceForm },
  methods: {
    emitSearch() {
      this.$emit("on-search", {
        search: this.search,
        toggledBtns: this.toggledBtns,
      });
    },
  },
  data() {
    return {
      search: "",
      toggledBtns: [],
      states: [
        "Selangor",
        "Pahang",
        "Kuala Lumpur",
        "Penang",
        "Kelantan",
        "Sabah",
        "Sarawak",
        "Terengganu",
        "Perak",
        "Perlis",
        "Johor",
        "Negeri Sembilan",
        "Kedah",
        "Malacca",
      ],
    };
  },
};
</script>

<style scoped>
.searchbar {
  height: 16vh;
}
</style>
