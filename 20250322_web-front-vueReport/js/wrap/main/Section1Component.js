export default {
    props: {
        activeSection: Number,
        parsedMarkdown: Function,
    },
    template: `
<v-container class="py-6">
<!-- 웹 사이트 호스팅 서비스 -->
<v-card class="mb-8" elevation="4" rounded="xl">
  <v-card-title class="text-h5 font-weight-bold">
    <v-icon class="mr-2" color="primary">mdi-cloud-download</v-icon>
    {{ activeSection }}강 웹 사이트 호스팅 서비스
  </v-card-title>
  <v-divider></v-divider>

  <v-card-text class="pa-2">
    <v-list dense>
      <v-list-item href="http://shlee1990.dothome.co.kr/20250315_01_index.html" target="_blank" rel="noopener noreferrer" class="hover:bg-grey-lighten-4 rounded">
        <v-list-item-content class="d-flex align-center">
        <v-icon color="blue darken-2" size="28" class="mr-3">mdi-earth</v-icon>
          <span class="font-weight-medium mr-2">CDN 서비스</span>
          <span style="font-size: 13px; color: #555;">http://shlee1990.dothome.co.kr/20250315_01_index.html</span>
        </v-list-item-content>
      </v-list-item>

      <v-list-item href="http://shlee1990.dothome.co.kr/index.html" target="_blank" rel="noopener noreferrer" class="hover:bg-grey-lighten-4 rounded">
        <v-list-item-content class="d-flex align-center">
          <v-icon color="green darken-2" size="28" class="mr-3">mdi-console</v-icon>
          <span class="font-weight-medium mr-2">CLI 서비스</span>
          <span style="font-size: 13px; color: #555;">http://shlee1990.dothome.co.kr/index.html</span>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card-text>
</v-card>
  
  <!-- 강의자료 -->
  <v-card class="mb-8" elevation="3" rounded="xl">
    <v-card-title class="text-h5 font-weight-bold">
      <v-icon class="mr-2" color="primary">mdi-book-open-page-variant</v-icon>
       {{ activeSection }}강 강의자료
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pa-4">
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
          <v-list-item-content>알드라이브 ALDrive213.exe</v-list-item-content>
        </v-list-item>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1SuHs_YW_F3IZ5CnSy1gB8laJdEj1SSIh" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>노드 패키지 버전도구 nvm-setup.exe</v-list-item-content>
        </v-list-item>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1T0hhcXOO7d87nDIbh0ScVE86_3-35Br9" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>IDE 코드 편집도구 VSCodeUserSetup-x64-1.98.2.exe</v-list-item-content>
        </v-list-item>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1-5KBalt79Iy-A5F2m0xDaEa31bpSOYrw" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>파일 전송도구 FileZilla_3.68.1_win64_sponsored2-setup.exe</v-list-item-content>
        </v-list-item>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1-4WU_KMGl81lIR0iQabxbnJVkim3szpu" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>코드 형상 관리도구 Git-2.48.1-64-bit.exe</v-list-item-content>
        </v-list-item>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1m_ZbLJLTitxSmYWAhURNbFO17KAYCPS5" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>구글 드라이브 관리도구 GoogleDriveSetup.exe</v-list-item-content>
        </v-list-item>
        <v-list-item href="https://drive.google.com/uc?export=download&id=1Z2fntvLzSGwr0vhK9pWH8VUYB9PNKbHM" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>교재 실습코드 (Vue.js 프로젝트 투입 일주일 전) vue-study-master.zip</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>

</v-container>
`,
    data() {
        return {
            markdown: `
### vscode 설치
- 추천 확장팩
\`\`\` bash
Live Server
Vue 3 Snippets
Vue VSCode Snippets
Vetur
Vue Extension Box
Vue VS Code Extension Pack
Live Preview
Eclipse Keymap
\`\`\`

### 작업 환경 구축
- 작업 경로
\`\`\` bash
D:\\shlee\\web-front-vueCls
\`\`\`

### 닷홈 웹호스팅 설정 
- FTP 접속정보
\`\`\` bash
FTP IP서버 112.175.185.145
FTP 도메인 shlee1990.dothome.co.kr
FTP 아이디 shlee1990
FTP 암호
\`\`\`

- DB 접속정보
\`\`\` bash
MySQL 8.0 주소 shlee1990.dothome.co.kr
MySQL 8.0 ID shlee1990 (계정아이디와 동일)
MySQL 8.0 암호
MySQL 8.0 관리(UTF-8) shlee1990.dothome.co.kr/myadmin
\`\`\`

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
\`\`\` bash
닷홈 웹호스팅 배포경로 /html
외부접속CDN http://shlee1990.dothome.co.kr/20250315_01_index.html
외부접속CLI http://shlee1990.dothome.co.kr/index.html
\`\`\`
`,
        };
    },
}
