<template>
    <div class="counter-warp">
        <p>Vuex counter：{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
// Use Vuex
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            count: state => state.counterModule.count
        })
    },
    methods: {
        increment () {
            this.$store.commit({
                type: 'counterModule/increment'
            });
        },
        decrement () {
            this.$store.commit({
                type: 'counterModule/decrement'
            });
        }
    }
};
</script>

<style>
.counter-warp {
    text-align: center;
    margin-top: 100px;
}
.home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
}
</style>
