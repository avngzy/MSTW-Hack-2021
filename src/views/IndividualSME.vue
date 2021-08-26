<template>
  <v-container class="screenContainer">
    <SME :smeData="smeData[this.$route.params.id]" />
    <GoogleMapSme />
  </v-container>
</template>

<script>
import SME from "../components/SME.vue";
import GoogleMapSme from "../components/GoogleMapSme.vue";
import { collection, onSnapshot } from "firebase/firestore";
// import {collection } from "firebase/firestore"
// import { doc, getDoc } from "firebase/firestore";
// import { doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  name: "IndividualSME",
  components: {
    SME,
    GoogleMapSme,
  },
  data: function() {
    return {
      smeData: [],
      unsub: null,
      testf: [],
    };
  },

  created() {
    this.unsub = onSnapshot(collection(db, "SMEs"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.smeData.push(doc.data());
      });
      this.testf = this.smeData;
    });
    // this.unsub = doc(collection(db, "SMEs", this.$route.params.id), (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     this.smeData.push(doc.data());
    //   });
    // });

    // async() => {
    //     const docRef = doc(db, "SMEs", this.$route.params.id);
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //       console.log("Document data:", docSnap.data());
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    //   }
  },
  unmounted() {
    this.unsub();
  },

  methods: {
    test() {
      var i;
      for (i = 0; i < this.testf.length; i++) {
        console.log(this.testf[i]);
      }
      // console.log(this.testf)
      // console.log(this.smeData)
    },
  },
};
</script>

<style scoped>
.screenContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 87vh;
  overflow-y: scroll;
}

.screenContainer::-webkit-scrollbar {
  display: none;
}
</style>
