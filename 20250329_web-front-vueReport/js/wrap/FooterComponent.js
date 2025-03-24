// 내보내기 1개 
export default {
    template: 
    `
    <footer id='footer' class="p-4 bg-gray-800 text-white text-center">
        <h1>{{title}}</h1>
    </footer>
    `, 
    data() {
        return {
            title: '© 2024 Vue Markdown Viewer'
        }
    }
}