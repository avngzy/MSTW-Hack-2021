<template>
  <v-container class="container">
    <vuetify-google-autocomplete
      ref="address"
      id="map"
      classname="form-control"
      label="Enter A Location"
      hint="Place You Want To Check For Covid"
      @placechanged="initMarker"
      country="my"
      class="searchbar"
    >
      <template #append>
        <v-icon>mdi-magnify</v-icon>
      </template>
    </vuetify-google-autocomplete>
    <v-container v-if="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-container>
    <gmap-map
      v-else
      :zoom="14"
      :center="center"
      class="map"
      ref="mapRef"
      @click="handleMapClick"
    >
      <gmap-marker
        :key="index * 2 + 1"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center = m.position"
        :icon="iconColor"
      ></gmap-marker>
      <gmap-marker
        :key="index * 2"
        v-for="(m, index) in smeLocationMarkers"
        :position="m.position"
        @click="center = m.position"
        :icon="smeIconColor"
      ></gmap-marker>
    </gmap-map>
    <v-btn
      elevation="2"
      fab
      class="fab"
      color="yellow"
      @click="addLocationMarker()"
    >
      <v-icon>mdi-virus</v-icon>
    </v-btn>
    <v-btn
      elevation="2"
      fab
      class="fab2"
      color="blue"
      @click="addSmeLocationMarker()"
    >
      <v-icon>mdi-basket</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import VuetifyGoogleAutocomplete from "vuetify-google-autocomplete";
import {
  db,
  addMarkerToFirebase,
  addSmeMarkerToFirebase,
} from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "CovidMap",
  components: { VuetifyGoogleAutocomplete },
  data() {
    return {
      loading: true,
      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      locationMarkers: [],
      smeLocationMarkers: [],
      // locPlaces: [],
      existingPlace: null,
      lat: null,
      lng: null,
      iconColor: {
        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      },
      smeIconColor: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      },
    };
  },

  async created() {
    this.locationMarkers = await this.fetchMarkers("Markers");
    this.smeLocationMarkers = await this.fetchMarkers("SmeMarkers");
    this.loading = false;
  },

  mounted() {
    this.locateGeoLocation();
  },

  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
      this.lat = this.existingPlace.latitude;
      this.lng = this.existingPlace.longitude;
      console.log(loc);
    },
    async addLocationMarker() {
      if (this.lat || this.lng) {
        const marker = {
          lat: this.lat,
          lng: this.lng,
        };
        this.center = marker;
        // this.locPlaces.push(this.existingPlace);
        // this.existingPlace = null;
        this.locationMarkers.push({ position: marker });
        await addMarkerToFirebase(marker);
      }
    },
    async addSmeLocationMarker() {
      console.log(this.existingPlace);
      if (this.lat || this.lng) {
        const marker = {
          lat: this.lat,
          lng: this.lng,
        };
        this.center = marker;
        // this.locPlaces.push(this.existingPlace);
        // this.existingPlace = null;
        this.smeLocationMarkers.push({ position: marker });
        await addSmeMarkerToFirebase(marker);
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },
    async fetchMarkers(markerType) {
      const querySnapshot = await getDocs(collection(db, markerType));
      const markersArr = [];
      querySnapshot.forEach((doc) => {
        markersArr.push({ position: doc.data() });
      });
      return markersArr;
    },
    handleMapClick(e) {
      this.lat = e.latLng.lat();
      this.lng = e.latLng.lng();
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
}

.map {
  width: 90%;
  height: 87.5%;
}

.searchbar {
  width: 90%;
  height: 5%;
}

.fab {
  position: absolute;
  bottom: 50px;
  left: 30px;
}

.fab2 {
  position: absolute;
  bottom: 125px;
  left: 30px;
}
</style>
