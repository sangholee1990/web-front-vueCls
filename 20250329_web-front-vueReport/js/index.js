import WrapComponent from "./WrapComponent.js"

Vue.createApp({
    template: `
        <WrapComponent/>
        
<!--        <textarea v-model="text" rows="10" cols="50"></textarea>-->
         <div class="col-md-6">
            <div v-html="parsedMarkdown"></div>
        </div>
    `,
    components: {
        WrapComponent,
        // 'md-editor': MdEditorV3,  // 주석 처리 - 필요 없으면 제거
        // Markdown,              // 주석 처리 - 필요 없으면 제거
    },
    data() {
        return {
            text: `
# Hello Vue3 
- Markdown!'
                `,
        };
    },
    computed: {
        parsedMarkdown() {
            return marked.parse(this.text);
        }
    }
}).mount("#root");