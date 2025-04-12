<template>
  <div id="wrap">
    <header-component />
    <main-component @click-modal-open-emit='clickModalOpenEmit' />
    <footer-component />
    <modal-component :is-show="isShow" :msg="msg" @click-close-btn-emit='clickCloseBtnEmit' />
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
  data() {
    return {
      isShow: false,
      msg: "",
    }
  },
  methods: {
    clickModalOpenEmit(z) {
      // alert('WrapComponent : ' + z);
      this.isShow = true;
      this.msg = z;

      // 모달 컴포넌트에게 프롭스로 데이터 전달
      // this.$props()
    },
    
    clickCloseBtnEmit() {
      this.isShow = false;
    },
  }
};
</script>

<style scoped>
#wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>