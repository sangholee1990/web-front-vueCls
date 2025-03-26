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

<!--  <v-card-text class="pa-2">-->
<!--    <v-list dense>-->
<!--      <v-list-item href="http://shlee1990.dothome.co.kr/20250322_web-front-vueReport/index.html" target="_blank" rel="noopener noreferrer" class="hover:bg-grey-lighten-4 rounded">-->
<!--        <v-list-item-content class="d-flex align-center">-->
<!--          <v-icon color="blue darken-2" size="28" class="mr-3">mdi-earth</v-icon>-->
<!--          <span class="font-weight-medium mr-2">과제 서비스</span>-->
<!--          <span style="font-size: 13px; color: #555;">http://shlee1990.dothome.co.kr/20250322_web-front-vueReport/index.html</span>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->
<!--    </v-list>-->
<!--  </v-card-text>-->
</v-card>

  <!-- 강의자료 -->
  <v-card class="mb-8" elevation="3" rounded="xl">
    <v-card-title class="text-h5 font-weight-bold">
      <v-icon class="mr-2" color="primary">mdi-book-open-page-variant</v-icon>
       {{ activeSection }}강 강의자료
    </v-card-title>
    <v-divider></v-divider>
<!--    <v-card-text class="pa-4">-->
<!--      <div v-html="parsedMarkdown(markdown)" class="markdown-body"></div>-->
<!--    </v-card-text>-->
  </v-card>

  <!-- 첨부파일 -->
  <v-card elevation="3" rounded="xl">
    <v-card-title class="text-h5 font-weight-bold">
      <v-icon class="mr-2" color="primary">mdi-paperclip</v-icon>
      {{ activeSection }}강 첨부파일
    </v-card-title>
    <v-divider></v-divider>
<!--    <v-card-text class="pa-4">-->
<!--      <v-list dense>-->
<!--        <v-list-item href="https://drive.google.com/uc?export=download&id=1cVIeibZ9hB8TnXB_uGG1en5z1DNn2JY8" target="_blank" rel="noopener noreferrer" download class="hover:underline">-->
<!--          <v-list-item-icon> <v-icon color="primary">mdi-file-download</v-icon></v-list-item-icon>-->
<!--          <v-list-item-content>강의자료 20250322_web-front-vueCls.zip</v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-card-text>-->
  </v-card>

</v-container>
`,
    data() {
        return {
            markdown: ``,
        };
    },
}
