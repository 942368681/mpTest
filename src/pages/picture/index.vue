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
            src: svg,
            obj: {
                name: 'sfl',
                t: [0, '1', false]
            }
        };
    },

    components: {},
    created() {
        let buf = this.str2ab(JSON.stringify(this.obj));
        console.log('buf=========>', buf);
        let obj = JSON.parse(this.ab2strU16(buf));
        console.log('obj=========>', obj);
    },
    methods: {
        str2ab (str) {
            let buf = new ArrayBuffer(str.length * 2);
            let bufView = new Uint16Array(buf);
            for (let i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        },
        ab2str (buf) {
            return String.fromCharCode.apply(null, new Uint8Array(buf));
        },
        ab2strU16 (buf) {
            return String.fromCharCode.apply(null, new Uint16Array(buf));
        }
    }
};
</script>

<style scoped>
.container {

}

</style>
