<template>
    <v-container>
        <v-row>
            <v-col v-if="user==true">
                <v-btn @click="signInWithGoogle">Sign in with Google</v-btn>
            </v-col>
            <v-col v-else>
                <!-- <p> {{user}} </p> -->
            </v-col>
                
        </v-row>
    </v-container>
</template>

<script>
// import {auth} from "../firebase/firebase";
// import {provider} from "../firebase/firebase";
import {tr} from "../firebase/firebase";

export default {
  name: 'UserPage',
  beforeCreate: function() {
    
  },
  methods: {
    signInWithGoogle: function() {
        tr()
        // auth.signInWithGoogle(provider)
    
        // .then(result => {
        //   this.user = result.user;
        // })
        // .catch(err => console.log(err));
    },

  
  
  }
}
</script>

<style scoped>

</style>