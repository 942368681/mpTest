<template>
    <div class="container">
        <board :init-data="boardData"/>
    </div>
</template>

<script>
const boardData = require('../../mock/boardData');
console.log(boardData)
export default {
    data() {
        return {
            boardData: {}
        };
    },

    components: {},

    methods: {},

    created() {
        // let app = getApp()
        this.boardData = boardData;
    }
};
</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 80%;
    height: 560px;
    background: #ededed;
    position: relative;
}
</style>
