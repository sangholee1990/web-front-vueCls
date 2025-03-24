export default {
    template:
    `
    <section id='section1'>
        <h3>{{title}} 강의자료</h3>
        <div v-html="parsedMarkdown"></div>
        
        <h3>{{title}} 첨부파일</h3>
        <ul>
            <li><a href="https://drive.google.com/uc?export=download&id=1-5iC-D3VzdBcAdu3VudIgBMwm1hrmCi3" target="_blank" rel="noopener noreferrer" download>알집 캡처 ALDrive213.exe</a></li>
        </ul>
    </section>
    `,
    data() {
        return {
            title: '1강',
            markdown: `
### 노드 CLI
- 프로젝트 작업 폴더 만들기
- 뷰 CLI 설치 하기
- git bash 터미널
\`\`\` bash
nvm use 20.18.1
nvm list installed
npm i -g @vue/cli
\`\`\`

- 프로젝트 생성
\`\`\` bash
vue create app
\`\`\`

- 프로젝트 실행
\`\`\` bash
ls -la
cd app
npm run serve
\`\`\`

- 프로젝트 구조 확인, 수정하기
- 프로젝트 빌드 dist 하기
\`\`\` bash
cd app
npm run build
\`\`\`

- 프로젝트 빌드 dist 내용 수정
- 닷홈에 배포하기
- 웹사이트 표출


### 노드 버전관리
- 노드 목록
\`\`\` bash
nvm list available
\`\`\`

- 노드 버전 설치
\`\`\` bash
nvm install 20.12.0
nvm install 20.14.0
nvm install 20.18.1
\`\`\`

- 노드 활성화
\`\`\` bash
nvm use 20.12.0
nvm use 20.18.0
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
