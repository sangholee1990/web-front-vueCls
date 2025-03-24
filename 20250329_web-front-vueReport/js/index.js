import WrapComponent from "./WrapComponent.js"

Vue.createApp({
    template: `
        <WrapComponent/>
    `,
    components: {
        WrapComponent,
    },
    data() {
        return {
        };
    },
    computed: {
        parsedMarkdown() {
            return marked.parse(this.text);
        }
    }
}).mount("#root");