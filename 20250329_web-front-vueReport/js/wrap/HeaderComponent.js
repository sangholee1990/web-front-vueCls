// 내보내기 1개 
export default {
    template: 
    `
    <header id='header'>
        <h2>{{title}}</h2>
            <nav>
                 <ul>
                    <li v-for="(section, index) in sectionList" :key="index">
                        <a :href="'#section' + (index + 1)">{{ section }}</a>
                    </li>
                </ul>
            </nav>
    </header>
    `,
    data() {
        return {
            title: '주요 목차',
            sectionList: ['1강', '2강', '3강', '4강'],
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        }
    },
}