<!-- the dream is a label, BUT, it can be editied later. click to make it have a submit button-->

<template>
    <div style="display:inline-block">
        <span v-if="!editable" @click="editable=true" >{{contents}}</span>
        <div v-else>
            <input v-model="contents" />
            <button @click="hide"> done editing </button>
        </div>
    </div>
</template>

<script>
export default {
    name:"editableSpan",
    data: function() {
        return {
            contents: "your name",
            editable: false
        }
    },
    methods: {
        hide: function() {
            this.editable = false;
            this.$emit("changed", this.contents);
        }
    }
}
</script>