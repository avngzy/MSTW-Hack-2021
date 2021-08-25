
<template>
    <v-container class="container">
        <div class="about">
            <h1>Shop name here</h1>
        </div>
        <v-row>
            <v-col>
            </v-col>
            <v-col>
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="300"
                max-width="800"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
            </v-col>
            <v-col>
            </v-col>

        </v-row>
          
        <v-row>
              Shop Name
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

    <!-- <v-card class="mx-auto smeCard" max-width="375" @click="showSME">
      <v-img
        class="white--text align-end"
        height="150px"
        :src="this.cardData.imageURL"
      >
        <v-card-title
          ><v-chip class="mx-2 px-2" color="primary">
            {{ this.cardData.type }}
          </v-chip>
          <v-chip class="mx-2 px-2" color="secondary">
            {{ this.cardData.secondaryType }}
          </v-chip>
        </v-card-title>
      </v-img>

      <v-card-title>{{ this.cardData.name }}</v-card-title>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="test" v-bind="attrs" v-on="on">
            <v-icon>mdi-gift</v-icon>
          </v-btn>
        </template>
        <span>Donate</span>
      </v-tooltip>
    </v-card> -->
</template>

<script>
export default {
  name: "SME",
  methods: {
      showSME: function() {
        console.log("here")
      this.$router.push("/sme");
    }
  },

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
</style>
