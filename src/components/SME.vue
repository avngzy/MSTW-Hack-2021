
<template>
    <v-container class="container">

        <v-card elevation="4">
            
                <h1 style="text-align: center;">{{this.smeData.name}}</h1>

            <v-row>
            <v-col>
            </v-col>
            <v-col>
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="450"
                max-width="1000"
                :src="this.smeData.imageURL"
                @click="showSME"></v-img>
            </v-col>
            <v-col>
            </v-col>

            </v-row>
            <v-card-text>
                <v-row>
                    <v-col>
                    <h2> Details: </h2>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col>
                        <h3> Location: </h3>
                    <p>  {{this.smeData.location}} </p>
                    </v-col>
                    
                    <v-col v-if="this.smeData.type==='F&B'">
                        <h3> Type of Cuisine: </h3>
                        <p> {{this.smeData.secondaryType}} </p>
                    </v-col>
                    <v-col v-if="this.smeData.type==='Services'">
                        <h3> Type of Service: </h3>
                        <p> {{this.smeData.secondaryType}} </p>
                    </v-col>
                    <v-col v-if="this.smeData.type==='Shop'">
                        <h3> Type of Shop: </h3>
                        <p> {{this.smeData.secondaryType}} </p>
                    </v-col>
                    
                    
                </v-row>
                 <v-row>
                     <v-col>
                    <h3> Email: </h3>
                    <p>  {{this.smeData.email}} </p>
                     </v-col>
                     <v-col>
                        <h3> Contact no: </h3>
                    <p>  {{this.smeData.contact}} </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col style="align-items: center;">
                        <v-btn> Donate! </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn> Visit website </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        
          
        
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
