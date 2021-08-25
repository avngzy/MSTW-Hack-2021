<template>
  <div>
    <SME />
    <GoogleMapSme />
    <v-row>
    </v-row>
  </div>
 
</template>


<script>
import SME from "../components/SME.vue";
import GoogleMapSme from "../components/GoogleMapSme.vue"
export default {
  name:"IndividualSME",
  components: {
    SME,
    GoogleMapSme
  }
}

</script>