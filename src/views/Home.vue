<template>
  <v-container class="container">
    <SearchBar />
    <div class="scrollView">
      <SMECard />
      <SMECard />
      <SMECard />
      <SMECard />
    </div>

  </v-container>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import SMECard from "../components/SMECard.vue";

export default {
  name: "Home",

  components: {
    SearchBar,
    SMECard,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.scrollView {
  height: 67.5vh;
  overflow-y: scroll;
  border: solid red;
  margin-top: 15px;
}

.scrollView::-webkit-scrollbar {
  display: none;
}


</style>
