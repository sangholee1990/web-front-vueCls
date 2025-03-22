import WrapComponent from "./WrapComponent.js"

{/* <WrapComponent></WrapComponent>
<wrap-component/>
<wrap-component></wrap-component> */}
Vue.createApp({
    template: 
    `
        <WrapComponent/>
    `, 
    components: {
        WrapComponent,
    },
}).mount("#root")

// alert('index.js');