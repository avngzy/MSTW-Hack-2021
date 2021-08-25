<template>
  <div class="hello">
    <wordlist v-model="words"/>
  </div>
</template>

<script>
import Wordlist from './wordlist.vue';
export default {
  components: {Wordlist },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      count: 0,
      star: -1,
      name: "test",
      words: ['apple', 'peach', 'pair'],
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
