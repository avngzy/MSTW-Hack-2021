<template>
    <div>
        <ul>
            <li v-for="word in value" :key="word">{{word}}</li>
        </ul>
        <input v-model="inputContents" />
        <button @click="addWord(inputContents)"> Add </button>
    </div>
</template>

<script>
export default {
    name: "wordList",
    props: ['value'],
    created: function() {
        this.inputContents = "doug";
    },
    data: function() {
        return {
            inputContents: ""
        }
    },
    methods: {
        addWord: function(word) {
            var newWords = this.value.slice()
            newWords.push(word) 
            this.$emit('input', newWords)
        }
    }
}
</script>