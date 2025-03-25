import HeaderComponent from "./wrap/HeaderComponent.js"
import FooterComponent from "./wrap/FooterComponent.js"
import MainComponent from "./wrap/MainComponent.js"

export default {
    template: `
<v-app>
    <HeaderComponent :activeSection="activeSection" @update-section="activeSection = $event"/>
    <MainComponent :activeSection="activeSection" />
    <FooterComponent/>
</v-app>
`,
    components: {
        HeaderComponent,
        FooterComponent,
        MainComponent,
    },
    data() {
        return {
            // title: 'vue 기초 및 활용'
            activeSection: 1,
        }
    }
}