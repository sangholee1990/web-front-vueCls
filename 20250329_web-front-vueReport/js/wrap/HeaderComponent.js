export default {
    template: `
<v-app-bar :elevation="2">
  <template v-slot:prepend>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>{{ title }}</v-app-bar-title>
  <v-spacer></v-spacer>

  <v-btn
    v-for="(section, index) in sectionList"
    :key="index"
    :text="section"
    @click="$emit('update-section', index + 1)"
    variant="text"
  >
    {{ section }}
  </v-btn>
</v-app-bar>

<v-navigation-drawer v-model="drawer">
  <v-list>
    <v-list-item
      v-for="(section, index) in sectionList"
      :key="index"
      :title="section"
      @click="$emit('update-section', index + 1); drawer = false"
    >
    </v-list-item>
  </v-list>
</v-navigation-drawer>
`,
    data() {
        return {
            title: 'vue 기초 및 활용',
            sectionList: ['1강', '2강'],
            drawer: false,
        }
    },
    props: ['activeSection'],
}