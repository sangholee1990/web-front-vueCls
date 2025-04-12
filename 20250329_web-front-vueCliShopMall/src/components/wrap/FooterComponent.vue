<template>
  <footer id="fooeter">
    <!-- {{ title }} -->
    <div class="left">
      <h1>
        <!-- <a href="../../../public/index.html" title="JUST 쇼핑몰 로고" -->
        <a href="/just" title="JUST 쇼핑몰 로고"
          ><span>JUST</span> <span>쇼핑몰</span></a
        >
      </h1>
    </div>
    <div class="center">
      <div class="container">
        <address>서울시 마포구 홍익로 29(서교동, 동교빌딩) just 쇼핑몰</address>
        <p>Copyright &copy; 2018 just 쇼핑몰, All right reserved.</p>
      </div>
    </div>
    <div class="right">
      <div class="container">
        <a href="#" title="인스타그램"
          ><img src="../../../public/images/icon_1.png" alt="인스타그램"
        /></a>
        <a href="#" title="트위터"
          ><img src="../../../public/images/icon_2.png" alt="트위터"
        /></a>
        <a href="#" title="유튜브"
          ><img src="../../../public/images/icon_3.png" alt="유튜브"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script>
import $ from "jquery";
export default {
  name: "FooterComponent",
  components: {},
  data() {
    return {
      title: "FooterComponent",
    };
  },
  beforeCreate() {},
  created() {
    $(function () {});
  },
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
/* 푸터 */
#wrap #fooeter {
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  z-index: 1;
  background: #f4f4f4;
  user-select: none;
}

/* 로고 */
#wrap #fooeter .left {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#wrap #fooeter .left h1 {
  width: 100%;
  height: 40px;
}
#wrap #fooeter .left h1 a {
  font-size: 24px;
  font-weight: 600;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
#wrap #fooeter .left h1 a span:nth-child(1) {
  color: #5ac;
  filter: grayscale(1);
  opacity: 0.5;
}
#wrap #fooeter .left h1 a span:nth-child(2) {
  margin-left: 5px;
  color: #c5a;
  filter: grayscale(1);
  opacity: 0.5;
}

/* 주소 카피라이터 */
#wrap #fooeter .center {
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#wrap #fooeter .center .container {
  text-align: center;
  line-height: 170%;
}
#wrap #fooeter .center .container address {
  font-size: 13px;
  width: 100%;
  color: #666;
}
#wrap #fooeter .center .container p {
  font-size: 11px;
  width: 100%;
  color: #999;
}

/* SNS 아이콘 */
#wrap #fooeter .right {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* #wrap #fooeter .right .container {} */

#wrap #fooeter .right .container a {
  margin: 0 5px;
}
#wrap #fooeter .right .container a img {
  width: 24px;
}
</style>
