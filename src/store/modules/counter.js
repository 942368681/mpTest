const counterModule = {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {

    },
    mutations: {
        increment: (state) => {
            const obj = state;
            obj.count += 1;
        },
        decrement: (state) => {
            const obj = state;
            obj.count -= 1;
        }
    },
    actions: {

    }
}

export default counterModule;
