<template>
  <div id="wrap">
    <header-component />
    <!-- 라우터 => 메인페이지 -->
    <footer-component />
    <modal-component
      :is-show="isShow"
      :msg="msg"
      @click-close-btn-emit="clickCloseBtnEmit"
    />
  </div>
</template>

<script>
import HeaderComponent from "./wrap/HeaderComponent.vue";
import FooterComponent from "./wrap/FooterComponent.vue";
import ModalComponent from "./wrap/ModalComponent.vue";

export default {
  name: "WrapComponent",
  data() {
    return {
      isShow: false,
      msg: "",
    };
  },
  components: {
    "header-component": HeaderComponent,
    "footer-component": FooterComponent,
    "modal-component": ModalComponent,
  },
  methods: {
    clickModalOpenEmit(z) {
      // 자기컴포넌트인 모달컴포넌트에게 프롭스로 데이터 전달하면된다.
      this.isShow = true;
      this.msg = z;
    },
    // 닫기 에밋 이벤트
    clickCloseBtnEmit() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>