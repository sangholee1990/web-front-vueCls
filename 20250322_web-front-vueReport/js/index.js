import WrapComponent from "./WrapComponent.js"

const vuetify = Vuetify.createVuetify({
    theme: {
        defaultTheme: 'light',
    },
    icons: {
        defaultSet: 'mdi',
    },
})

Vue.createApp({
    template: `
        <WrapComponent/>
    `,
    components: {
        WrapComponent,
    },
    data() {
        return {
        };
    },
}).use(vuetify).mount("#root");