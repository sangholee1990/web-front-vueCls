<template>
  <div id="wrap">
    <!-- {{ title }} -->
    <header-component />
    <main-component />
    <footer-component />
    <modal-component />
    <!-- <HeaderComponent /> -->
    <!-- <MainComponent /> -->
    <!-- <FooterComponent /> -->
    <!-- <ModalComponent /> -->
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
    // HeaderComponent,
    // MainComponent,
    // FooterComponent,
    // ModalComponent,
  },
  data() {
    return {
      title: "WrapComponent",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped>
#wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>
