import { createApp } from 'vue'
import WrapComponent from './components/WrapComponent.vue'
import store from './store/index.js'


// createApp(WrapComponent).mount('#app')
createApp(WrapComponent).use(store).mount('#app')
