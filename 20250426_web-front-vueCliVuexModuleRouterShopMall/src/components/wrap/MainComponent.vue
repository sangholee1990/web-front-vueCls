<template>
  <main id="main">
    <section1-component />
    <section2-component @click-modal-open-emit='clickModalOpenEmit' />
  </main>
</template>


<script>
import Section1Component from "./main/Section1Component.vue";
import Section2Component from "./main/Section2Component.vue";

export default {
  name: "MainComponent",
  components: {
    "section1-component": Section1Component,
    "section2-component": Section2Component,
  },
  methods: {
    clickModalOpenEmit(z) {
      this.$emit('clickModalOpenEmit', z);
    }
  }
};
</script>

<style lang="scss" scoped>
#wrap #main {
  width: 100%;
  position: relative;
  z-index: 2;
}
</style>