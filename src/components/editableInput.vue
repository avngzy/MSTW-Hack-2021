<!-- the dream is a label, BUT, it can be editied later. click to make it have a submit button-->

<template>
    <div style="display:inline-block">
        <span v-if="!editable" @click="show" >{{value}}</span>
        <div v-else @focusout="hide">
            <input v-model="contents" />
        </div>
    </div>
</template>

<script>
export default {
    name:"editableSpan",
    props: ["value"],
    data: function() {
        return {
            contents: this.value,
            editable: false
        }
    },
    methods: {
        hide: function() {
            this.editable = false;
            this.$emit("input", this.contents);
        },
        show: function() {
            this.editable = true;
        }
    }
}
</script>