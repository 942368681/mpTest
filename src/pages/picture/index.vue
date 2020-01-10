<template>
    <div class="container">
        <image :src="src" mode="aspectFit"></image>
    </div>
</template>

<script>
import svg from '../../../static/images/pic1.svg';
// import png from '../../../static/images/user.png';

export default {
    data() {
        return {
            src: svg
        };
    },

    components: {},
    created() {
        
    },
    methods: {
        
    }
};
</script>

<style scoped>
.container {

}

</style>
