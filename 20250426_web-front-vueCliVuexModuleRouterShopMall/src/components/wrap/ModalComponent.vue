<template>
  <div :class="['popup', { on: isOpenModal }]">
    <div class="container">
      <div class="title">
        <h1>9월 JUST 쇼핑몰 세일 안내</h1>
      </div>
      <div class="content">
        <ul>
          <li>{{ 공지글제목 }}</li>
          <li>
            JUST 쇼핑몰이 제안하는 유니크한 시즌별 패션 트렌드를 즐겨보세요.
          </li>
          <li>
            오랜만에 찾아온 휴면고객이라면, 지금 바로 로그인 하고 적립금
            1,000원을 받으세요!
          </li>
        </ul>
      </div>
      <div class="button-box">
        <button class="close-btn" title="닫기" @click="clickCloseBtn">
          닫기
        </button>
      </div>
    </div>
  </div>
</template>
  
  
<script>
export default {
  name: "ModalComponent",
  props: ["isShow", "msg"],
  data() {
    return {};
  },
  computed: {
    isOpenModal(){
      return this.$store.getters.getModal.isModal
    },
    공지글제목(){
      return this.$store.getters.getModal.공지글
    }
  },
  methods: {
    // 자식 => 부모 => 이벤트 닫기 전달
    clickCloseBtn() {
      // 모달창 닫기
      const obj = {
        isModal: false,
        공지글: '' 
      }
      this.$store.dispatch("clickModalCloseAction", obj);
    },
  },
};
</script>
  
<style lang="scss" scoped>
/* 팝업창 */
/* 
화면의 맨위 맨좌측
전체너비 높이 
*/

#wrap .popup {
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  /* 팝업창 가운데 */
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  &.on {
    display: flex;

    /* block */
  }

  .container {
    width: 500px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 20px;

    .title {
      width: 100%;

      h1 {
        font-size: 20px;
        font-weight: 600;
        color: #222;
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
      }
    }

    .content {
      padding-top: 20px;

      ul {
        width: 100%;

        li {
          width: 100%;
          line-height: 180%;
        }
      }
    }

    .button-box {
      padding-top: 50px;
      text-align: right;

      button {
        width: 60px;
        height: 35px;
        border: 1px solid #ccc;
        background: #fff;
        color: #333;
        cursor: pointer;
        border-radius: 3px;
        font-weight: 500;

        &:hover {
          background: #555;
          color: #fff;
        }
      }
    }
  }
}

</style>