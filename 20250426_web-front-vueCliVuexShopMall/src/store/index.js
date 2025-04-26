import {
    createStore
} from "vuex";

const store = createStore({
    state() {
        return {
            isShow: false,
            cnt: 0,
        }
    },
    getters: {},
    mutations: {},
    actions: {},
});

export default store;