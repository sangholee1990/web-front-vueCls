<template>
  <main id="main">
    <!-- {{ title }} -->
    <section1-component />
    <section2-component />
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
  data() {
    return {
      title: "MainComponent",
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
/* 메인 */
#wrap #main {
  width: 100%;
  position: relative;
  z-index: 2;
}
</style>
