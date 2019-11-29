import Vue from 'vue';
import Vuex from 'vuex';
import counterModule from './modules/counter';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        counterModule
    }
});

export default store;
