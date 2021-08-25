
<template>
    <v-container class="container">
        <div class="about">
            <v-row>
            <v-col>
                <p> </p>
            </v-col>
             <v-col>
                 <h1>{{this.smeData.name}}</h1>
            </v-col>
             <v-col>
                 <p> </p>
            </v-col>
            </v-row>
            
        </div>
        <v-row>
            <v-col>
            </v-col>
            <v-col>
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="300"
                max-width="800"
                :src="this.smeData.imageURL"
                @click="showSME"></v-img>
            </v-col>
            <v-col>
            </v-col>

        </v-row>
          
        <v-row>
            <p></p> {{this.smeData.location}}
        </v-row>
        <v-row>
            contact
        </v-row>
        <v-row>
            <v-col>
                <v-btn> Donate! </v-btn>
            </v-col>
            <v-col>
                <v-btn> Visit website </v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
  name: "SME",
  methods: {
      showSME: function() {
        console.log(this.smeData)
    }
  },
  props: {
      smeData: Object,
  }

};
</script>

<style scoped>
.test {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.smeCard {
  margin-bottom: 15px;
}

h1 {
    text-align:center;
}
</style>
