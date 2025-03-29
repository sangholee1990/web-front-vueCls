<template>
  <!-- 팝업창(모달창) -->
  <div class="popup">
    <!-- <div class="popup on"> -->
    <!-- {{ title }} -->
    <div class="container">
      <div class="title">
        <h1>9월 JUST 쇼핑몰 세일 안내</h1>
      </div>
      <div class="content">
        <ul>
          <li>오랜만에 찾아온 세일 안내!</li>
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
        <button class="close-btn" title="닫기">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  components: {},
  data() {
    return {
      title: "ModalComponent",
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
}

#wrap .popup.on {
  display: flex;
}

#wrap .popup .container {
  width: 500px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 20px;
}

#wrap .popup .container .title {
  width: 100%;
}
#wrap .popup .container .title h1 {
  font-size: 20px;
  font-weight: 600;
  color: #222;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}

#wrap .popup .container .content {
  padding-top: 20px;
}
#wrap .popup .container .content ul {
  width: 100%;
}
#wrap .popup .container .content ul li {
  width: 100%;
  line-height: 180%;
}

#wrap .popup .container .button-box {
  padding-top: 50px;
  text-align: right;
}
#wrap .popup .container .button-box button {
  width: 60px;
  height: 35px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
}
#wrap .popup .container .button-box button:hover {
  background: #555;
  color: #fff;
}
</style>
