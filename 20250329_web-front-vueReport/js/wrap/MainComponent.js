import Section1Component from "./main/Section1Component.js"
import Section2Component from "./main/Section2Component.js"
import { parsedMarkdown } from './UtilsComponent.js';

// 내보내기 1개
export default {
    template: `
<v-main>
    <v-container>
        <Section1Component v-if="activeSection === 1" :active-section="activeSection" :parsed-markdown="parsedMarkdown" />
        <Section2Component v-if="activeSection === 2" :active-section="activeSection" :parsed-markdown="parsedMarkdown" />
    </v-container>
</v-main>
    `,
    components: {
        Section1Component,
        Section2Component,
    },
    data() {
        return {
            // title: 'MainComponent',
        }
    },
    props: ['activeSection'],
    methods: {
        parsedMarkdown
    }
}