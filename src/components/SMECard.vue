<template>
    <v-card class="mx-auto smeCard" max-width="375" @click="showSME(index)">
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
    </v-card>
</template>

<script>
export default {
  name: "SMECard",
  props: {
    cardData: Object,
    index: Number,
  },
  methods: {
      showSME: function(idx) {
        console.log("here")
      this.$router.push("/sme/" + idx);
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
  width: 100%;
}
</style>
