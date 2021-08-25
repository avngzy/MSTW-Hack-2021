<template>
    <div style="display: inline-block">
        <span @click="show">{{word}}</span>
        <div class="popup" v-if="expanded" @click="expanded=false" :style="{top:y+'px', left:x+'px'}"><slot /></div>
    </div>
</template>
<script>
export default {
    name:"keyword",
    props:{
        word: String
    },
    data: function() {
        return {
            expanded: false,
            x: 0,
            y: 0,
        };
    },
    methods: {
        show: function(event) {
            this.expanded = true;
            this.x = event.clientX;
            this.y = event.clientY
        }
    }
}
</script>

<style scoped>
div.popup {
    position: fixed;
    background-color: white;
    padding: 2px;
    border: 1px black solid;
}
</style>