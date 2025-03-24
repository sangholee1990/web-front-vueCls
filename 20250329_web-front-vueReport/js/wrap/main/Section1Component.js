
// 내보내기 1개
export default {
    template:
    `
<!--    <vue-markdown :source="input" class="markdown-body" />-->
<!--    <textarea v-model="markdownInput" placeholder="마크다운을 입력하세요"></textarea>-->
<!--    <vue-markdown :source="markdownInput"></vue-markdown>-->
<!--    <VueMarkdown :source="input" class="markdown-body" />-->
<!--     <vue-markdown>{{title}}</vue-markdown>-->
<!--     <vue-markdown :source="markdown"></vue-markdown>-->
<!--        <MdEditor v-model="text"/>-->
<!--        <md-editor v-model="text"></md-editor>-->
        <Markdown :source="source" />
    `,
    // Vue3Markdown

    // components: {
    //     MdEditorV3
    // },
    data() {
        return {
             source: '# Hello World!'
            // text: '',
            // text: `# Hello, Vue3 Markdown (UMD)!`
            // title: `# 제1강 - HTML`
            // markdownInput: `
            // # 제1강 - HTML
            // - HTML은 구조를 만든다
            // - 태그로 이루어져 있다
            // `
        };
    },
    // computed: {
    //     compiledMarkdown() {
    //         return marked.parse(this.input);
    //         // return this.input;
    //     }
    // },
}