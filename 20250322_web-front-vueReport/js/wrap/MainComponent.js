import Section1Component from "./main/Section1Component.js"
import Section2Component from "./main/Section2Component.js"
import Section3Component from "./main/Section3Component.js"
import { parsedMarkdown } from './UtilsComponent.js';

export default {
    template: `
<v-main>
    <v-container>
        <component :is="'Section' + activeSection + 'Component'" :active-section="activeSection" :parsed-markdown="parsedMarkdown"/>
    </v-container>
</v-main>
`,
    components: {
        Section1Component,
        Section2Component,
        Section3Component,
    },
    methods: {
        parsedMarkdown
    },
    data() {
        return {
            // title: 'MainComponent',
        }
    },
    props: ['activeSection'],
}