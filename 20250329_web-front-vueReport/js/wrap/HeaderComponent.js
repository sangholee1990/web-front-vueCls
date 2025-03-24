// 내보내기 1개 
export default {
    template: 
    `
    <header id='header' class="p-4 bg-blue-500 text-white text-xl">
        <h1>{{title}}</h1>
    </header>
    `,
    data() {
        return {
            title: '📚 마크다운 수업 자료'
        }
    }
}