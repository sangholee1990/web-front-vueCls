import WrapComponent from "./WrapComponent.js"
// import MdEditorV3 from 'md-editor-v3'
// import VueMarkdown from 'vue-markdown-render'

// var VueMarkdown = require('vue-markdown');

{/* <WrapComponent></WrapComponent>
<wrap-component/>
<wrap-component></wrap-component> */}

// Vue.use(VueMarkdown);
Vue.createApp({
    template:
    `
        <WrapComponent/>
        
        <div>
            <textarea class="form-control" rows="15" v-model="message"></textarea>
            <vue-markdown v-html="parsed_markdown"></vue-markdown>
        </div>
    `, 
    components: {
        WrapComponent,
        // 'md-editor': MdEditorV3,
        // Markdown,
    },
     data() {
                return {
                    message: '# Markdownのテスト',
                }
            },
            computed: {
                parsed_markdown: function () {
                    return marked(this.message)
                }
            }
}).mount("#root")

// alert('index.js');