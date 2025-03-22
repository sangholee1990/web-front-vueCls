import Section1Component from "./main/Section1Component.js"
import Section2Component from "./main/Section2Component.js"
import Section3Component from "./main/Section3Component.js"

// 내보내기 1개 
export default {
    template: 
    `
    <main id='main'>
        <h1>{{title}}</h1>
        <Section1Component/>
        <Section2Component/>
        <Section3Component/>
    </main>

    `, 
    components: {
        Section1Component,
        Section2Component,
        Section3Component,
    },
    data() {
        return {
            title: 'MainComponent'
        }
    }
}