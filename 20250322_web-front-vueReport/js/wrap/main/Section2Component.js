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
      <v-list-item href="http://shlee1990.dothome.co.kr/20250322_web-front-vueReport/index.html" target="_blank" rel="noopener noreferrer" class="hover:bg-grey-lighten-4 rounded">
        <v-list-item-content class="d-flex align-center">
          <v-icon color="blue darken-2" size="28" class="mr-3">mdi-earth</v-icon>
          <span class="font-weight-medium mr-2">과제 서비스</span>
          <span style="font-size: 13px; color: #555;">http://shlee1990.dothome.co.kr/20250322_web-front-vueReport/index.html</span>
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
        <v-list-item href="https://drive.google.com/uc?export=download&id=1cVIeibZ9hB8TnXB_uGG1en5z1DNn2JY8" target="_blank" rel="noopener noreferrer" download class="hover:underline">
          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>
          <v-list-item-content>강의자료 20250322_web-front-vueCls.zip</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>

</v-container>
`,
    data() {
        return {
            markdown: `
### 컴포넌트 Component 분석 설계
#### 1. 홈페이지 기본 구성
- 헤더 header
- 메인 main
- 푸터 footer

#### 2. 컴포넌트 생성 
- 컴포넌트 네이밍 규칙: 파스칼 케이스

#### 3. vue cli 전체 구성
- [public]
    - index.html
    - #root
- [src]
    - index.js
        - WrapComponent
        - [wrap]
            - HeaderComponent
            - MainComponent
            - [main]
                - Section1Component
                - Section2Component
                - Section3Component
            - SubComponent
            - [sub]
                - Sub1Component
                - Sub2Component
                - Sub3Component
            - FooterComponent

#### 4. 홈페이지 구성
\`\`\` html
<div id="wrap">
    <header id="header"></header>
    <main id="main">
        <section id="section1"></section>
        <section id="section2"></section>
        <section id="section3"></section>
    </main>
    <footer id="footer"></footer>
</div>
\`\`\`

#### 5. 모듈 컴포넌트 생성과 구현
- index.html
    - #root 부여
- js/index.js 생성
    - 돔 컨테이너 #root 연동
    - 템플릿 (template) 구성, 태그 작성
    - index.html 연동
- WrapComponent.js
- [wrap]
- HeaderComponent.js
- MainComponent.js
- FooterComponent.js
- [wrap][main]
- Section1Component.js
- Section2Component.js
- Section3Component.js
`,
        };
    },
}
