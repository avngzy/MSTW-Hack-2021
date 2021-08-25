<!--To really polish this thing up I would switch from html letter stars to real star images. This will be a lot easier here though!-->
<template>
<div class="rating" @mouseleave="hoverStar=-1">
    <span v-for="star in 5" :key="star" class="star" :style="{color: starColor}" @mouseenter="hoverStar=star" @click="rate(star)"> 
        {{star &lt;= stateNum ? "&starf;":"&star;"}}
        <!-- This is annoying, but since this is technically html, <= should be &lt;= -->
    </span>
</div>
</template>

<script>
export default {
    name: 'rating',
    props: {
        prediction: {
            type: Number,
            default: 3
        },
        value: {
            type: Number,
            default: -1
        },
        colors: {
            type:Object,
            default: function() {
                return {
                hover: "green",
                rated: "red",
                prediction: "yellow" 
                };
            }
        }
    }, 
    data: function(){
        return {
            hoverStar: -1
        };
    },
    // computed properties act like props/data , but can be computed by functions. 
    // I wouldn't go as far as calling them "necissary" (you can always use methods for this), but I would call them useful, and efficient!
    computed: { 
        rated: function() {
            return this.value>=0;
        },
        hover: function() {
            return this.hoverStar>=0;
        },
        state: function() {
            if (this.hover) {
                return "hover";
            } else if (this.rated) {
                return "rated";
            } else {
                return "prediction";
            }
        },
        stateNum: function() {
            if (this.hover) {
                return this.hoverStar
            } else if (this.rated) {
                return this.value;
            } else {
                return this.prediction;
            }
        },
        starColor: function() {
            return this.colors[this.state];
        },
    },
    methods: {
        rate: function(star) {
            this.$emit("input", star)
        }
    }
}
</script>

<style scoped>
.rating {
    display: inline-block;
}
.star {
  font-size: 30px;
  cursor:pointer;
  letter-spacing: -3px;
}
</style>