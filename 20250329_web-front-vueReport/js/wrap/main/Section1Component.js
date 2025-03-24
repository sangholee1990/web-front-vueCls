
// 내보내기 1개
export default {
    template:
    `
    <section id='section1'>
        <h2>{{title}}</h2>
        <h3>강의자료</h3>
        <div v-html="parsedMarkdown"></div>
        
        <h3>첨부파일</h3>
        <ul>
            <li><a href="https://drive.google.com/uc?export=download&id=1-5iC-D3VzdBcAdu3VudIgBMwm1hrmCi3" target="_blank" rel="noopener noreferrer" download>알집 캡처 ALDrive213.exe</a></li>
        </ul>
    </section>
    `,
    data() {
        return {
            title: 'Section1Component 1강',
            markdown: `
# Hello Vue3 + Markdown!
- Vue 3
- Marked.js
- **CDN으로 간편하게**
- 여러 줄로 작성해도 깔끔하게!

## 터미널
\`\`\` html
# 버전 목록 확인하기
nvm list available

# 노드 버전 설치
nvm install 20.12.0
nvm install 20.14.0
nvm install 20.18.1

nvm list installed

nvm use 20.12.0
nvm use 20.18.0

nvm list installed
\`\`\`

`,
        };
    },
    computed: {
        parsedMarkdown() {
            // return marked.parse(this.markdown);
            const rawHtml = marked.parse(this.markdown);
            const sanitizedHtml = DOMPurify.sanitize(rawHtml);
            return `<div class="markdown-body">${sanitizedHtml}</div>`;
        }
    },
}
