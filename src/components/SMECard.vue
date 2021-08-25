<template>
  <v-card class="mx-auto smeCard" max-width="375">
    <v-img class="white--text align-end" height="150px" :src="imageURL">
      <v-card-title
        ><v-chip class="mx-2 px-2" color="primary">
          {{ this.type }}
        </v-chip>
        <v-chip class="mx-2 px-2" color="secondary">
          {{ this.secondaryType }}
        </v-chip>
      </v-card-title>
    </v-img>

    <v-card-title>{{ this.name }}</v-card-title>

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="test" v-bind="attrs" v-on="on">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </template>
      <span>Donate</span>
    </v-tooltip>
  </v-card>
</template>

<script>
export default {
  name: "SMECard",
  data() {
    return {
      name: "Mamak",
      contact: "0123456789",
      email: "mamak@gmail.com",
      imageURL:
        "https://i0.wp.com/www.techarp.com/wp-content/uploads/2021/04/Fake-Mamak-COVID-19-warning.jpg?fit=1000%2C500&ssl=1",
      location: "Kuala Lumpur",
      type: "F&B",
      secondaryType: "Indian Food",
    };
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
  margin-bottom: 10px;
}

.smeCard:last-child {
  margin-bottom: 0;
}
</style>
