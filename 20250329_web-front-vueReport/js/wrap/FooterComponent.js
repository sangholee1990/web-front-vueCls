// 내보내기 1개 
export default {
    template:`
<v-footer>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6" class="text-center">
                <p>{{ title }}</p>
            </v-col>
        </v-row>
    </v-container>
</v-footer>
`,
    data() {
        return {
            title: 'Copyright © 2025 vue 기초 및 활용'
        }
    }
}