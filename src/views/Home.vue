<template>
  <v-container class="container">
    <SearchBar @on-search="handleFilter" />
    <div class="scrollView">
      <div v-for="(cardData, val) in filteredCardsData" :key="val">
        <SMECard :cardData="cardData" />
      </div>
    </div>
  </v-container>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import SMECard from "../components/SMECard.vue";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  name: "Home",
  components: {
    SearchBar,
    SMECard,
  },
  methods: {
    handleFilter(e) {
      if (!e.search && e.toggledBtns.length === 0) {
        this.filteredCardsData = this.cardsData;
      } else if (!e.search) {
        this.filteredCardsData = this.cardsData.filter((cardData) =>
          e.toggledBtns.includes(cardData.type)
        );
      } else if (e.toggledBtns.length === 0) {
        this.filteredCardsData = this.cardsData.filter(
          (cardData) => cardData.location === e.search
        );
      } else {
        this.filteredCardsData = this.cardsData.filter(
          (cardData) =>
            cardData.location === e.search &&
            e.toggledBtns.includes(cardData.type)
        );
      }
    },
  },
  created() {
    this.unsub = onSnapshot(collection(db, "SMEs"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.cardsData.push(doc.data());
      });
      this.filteredCardsData = this.cardsData;
    });
  },
  data() {
    return {
      unsub: null,
      cardsData: [],
      filteredCardsData: [],
    };
  },
  unmounted() {
    this.unsub();
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
  margin-top: 15px;
}

.scrollView::-webkit-scrollbar {
  display: none;
}
</style>
