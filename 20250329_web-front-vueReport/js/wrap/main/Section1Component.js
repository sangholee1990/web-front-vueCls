export default {
    props: {
        activeSection: Number,
        parsedMarkdown: Function,
    },
    template: `
<v-container class="py-6">
  <!-- 강의자료 -->
  <v-card class="mb-8" elevation="3" rounded="xl">
    <v-card-title class="text-h5 font-weight-bold">
      <v-icon class="mr-2" color="primary">mdi-book-open-page-variant</v-icon>
       {{ activeSection }}강 강의자료
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pa-4" style="background-color: #f9f9f9;">
      <div v-html="parsedMarkdown(markdown)" class="markdown-body"></div>
    </v-card-text>
  </v-card>

  <!-- 첨부파일 -->
  <v-card elevation="3" rounded="xl">
    <v-card-title class="text-h5 font-weight-bold">
      <v-icon class="mr-2" color="primary">mdi-paperclip</v-icon>
      {{ activeSection }}강 첨부파일
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pa-4">
      <v-list dense>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1-5iC-D3VzdBcAdu3VudIgBMwm1hrmCi3" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>알집 캡처 ALDrive213.exe</v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-card-text>
  </v-card>

</v-container>
`,
    data() {
        return {
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
}
