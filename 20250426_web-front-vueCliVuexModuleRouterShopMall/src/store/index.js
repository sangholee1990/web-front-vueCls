import { createStore } from "vuex";
import { modal } from "./module/modal.js";
import { count } from "./module/count.js";
import { notice } from "./module/notice.js";

const store = createStore({
   modules: {
        modal,
        count,
        notice
   }
});
export default store;