<template>
    <div class="box">
        <!-- <wxs module="drag" src="./dragControl.wxs"></wxs>
        <div 
            v-show="show" 
            @touchstart="drag.touchstart" 
            @touchmove="drag.touchmove" 
            @touchend="dra0g.touchmove"
            class="movable" 
            :style="{ position: 'absolute', width: '100px', height: '100px', background: 'red', left: left + 'px', top: top + 'px' }"
        ></div> -->
        <board />
    </div>
</template>

<script>

export default {
    data () {
        return {
            show: true,
            left: 0,
            top: 0
        }
    },
    computed: {
        
    },
    methods: {
        
    }
};
</script>

<style>
    .box {
        margin: 0 auto;
        width: 80%;
        height: 1000rpx;
        background: #ededed;
        position: relative;
    }
</style>
