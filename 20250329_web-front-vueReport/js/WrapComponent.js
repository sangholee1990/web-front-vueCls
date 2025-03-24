// 내보내기 1개 
import HeaderComponent from "./wrap/HeaderComponent.js"
import FooterComponent from "./wrap/FooterComponent.js"
import MainComponent from "./wrap/MainComponent.js"


export default {
    template: 
    `
    <div id='wrap'>
        <h1>{{title}}</h1>
        <HeaderComponent/>
        <MainComponent/>
        <FooterComponent/>
    </div>
    `, 
    components: {
        HeaderComponent,
        FooterComponent,
        MainComponent,
    },
    data() {
        return {
            title: 'vue 기초 및 활용'
        }
    }
}