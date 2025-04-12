<template>
  <div id="wrap">
    <header-component />
    <main-component />
    <footer-component />
    <modal-component />
  </div>
</template>

<script>
import HeaderComponent from "./wrap/HeaderComponent.vue";
import MainComponent from "./wrap/MainComponent.vue";
import FooterComponent from "./wrap/FooterComponent.vue";
import ModalComponent from "./wrap/ModalComponent.vue";

export default {
  name: "WrapComponent",
  components: {
    "header-component": HeaderComponent,
    "main-component": MainComponent,
    "footer-component": FooterComponent,
    "modal-component": ModalComponent,
  },
};
</script>

<style scoped>
#wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>