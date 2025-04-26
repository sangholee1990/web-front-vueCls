import {
    createApp
} from 'vue'
import WrapComponent from './components/WrapComponent.vue'
import store from './store/index.js'
import router from './router/index.js'

createApp(WrapComponent)
    .use(store)
    .use(router)
    .mount('#app');