<template>
  <header id="header">
    <div class="left">
      <h1>
        <a href="./index.html" :title="logo"
          ><span>{{ logo.split(" ")[0] }}</span>
          <span>{{ logo.split(" ")[1] }}</span></a
        >
      </h1>
    </div>
    <div class="right">
      <nav id="nav" @mouseleave="mouseleaveNav">
        <ul>
          <li class="col">
            <a
              href="#"
              :class="['main-btn', { on: menu1 }]"
              title="탑"
              @mouseenter="mouseenterMenu1"
              >탑</a
            >
            <div :class="['sub', 'sub1', { on: menu1, off: nav }]">
              <div class="sub-container">
                <ul>
                  <li>
                    <!-- 1열 -->
                    <ul>
                      <li><a href="#" title="블라우스">sub1 블라우스</a></li>
                      <li><a href="#" title="티">티</a></li>
                      <li><a href="#" title="셔츠">셔츠</a></li>
                      <li><a href="#" title="니트">니트</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 2열 -->
                    <ul>
                      <li><a href="#" title="자켓">자켓</a></li>
                      <li><a href="#" title="코트">코트</a></li>
                      <li><a href="#" title="가디건">가디건</a></li>
                      <li><a href="#" title="머플러">머플러</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 3열 -->
                    <ul>
                      <li><a href="#" title="청바지">청바지</a></li>
                      <li><a href="#" title="짧은바지">짧은바지</a></li>
                      <li><a href="#" title="긴바지">긴바지</a></li>
                      <li><a href="#" title="레깅스">레깅스</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 4열 -->
                    <ul>
                      <li><a href="#" title="귀고리">귀고리</a></li>
                      <li><a href="#" title="목걸이">목걸이</a></li>
                      <li><a href="#" title="반지">반지</a></li>
                      <li><a href="#" title="팔찌">팔찌</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="col">
            <a
              href="#"
              title="아우터"
              :class="['main-btn', { on: menu2 }]"
              @mouseenter="mouseenterMenu2"
              >아우터</a
            >
            <div :class="['sub', 'sub2', { on: menu2, off: nav }]">
              <div class="sub-container">
                <ul>
                  <li>
                    <!-- 1열 -->
                    <ul>
                      <li><a href="#" title="블라우스">sub2 블라우스</a></li>
                      <li><a href="#" title="티">티</a></li>
                      <li><a href="#" title="셔츠">셔츠</a></li>
                      <li><a href="#" title="니트">니트</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 2열 -->
                    <ul>
                      <li><a href="#" title="자켓">자켓</a></li>
                      <li><a href="#" title="코트">코트</a></li>
                      <li><a href="#" title="가디건">가디건</a></li>
                      <li><a href="#" title="머플러">머플러</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 3열 -->
                    <ul>
                      <li><a href="#" title="청바지">청바지</a></li>
                      <li><a href="#" title="짧은바지">짧은바지</a></li>
                      <li><a href="#" title="긴바지">긴바지</a></li>
                      <li><a href="#" title="레깅스">레깅스</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 4열 -->
                    <ul>
                      <li><a href="#" title="귀고리">귀고리</a></li>
                      <li><a href="#" title="목걸이">목걸이</a></li>
                      <li><a href="#" title="반지">반지</a></li>
                      <li><a href="#" title="팔찌">팔찌</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="col">
            <a
              href="#"
              class="main-btn"
              title="팬츠"
              :class="['main-btn', { on: menu3 }]"
              @mouseenter="mouseenterMenu3"
              >팬츠</a
            >
            <div :class="['sub', 'sub3', { on: menu3, off: nav }]">
              <div class="sub-container">
                <ul>
                  <li>
                    <!-- 1열 -->
                    <ul>
                      <li><a href="#" title="블라우스">sub3 블라우스</a></li>
                      <li><a href="#" title="티">티</a></li>
                      <li><a href="#" title="셔츠">셔츠</a></li>
                      <li><a href="#" title="니트">니트</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 2열 -->
                    <ul>
                      <li><a href="#" title="자켓">자켓</a></li>
                      <li><a href="#" title="코트">코트</a></li>
                      <li><a href="#" title="가디건">가디건</a></li>
                      <li><a href="#" title="머플러">머플러</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 3열 -->
                    <ul>
                      <li><a href="#" title="청바지">청바지</a></li>
                      <li><a href="#" title="짧은바지">짧은바지</a></li>
                      <li><a href="#" title="긴바지">긴바지</a></li>
                      <li><a href="#" title="레깅스">레깅스</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 4열 -->
                    <ul>
                      <li><a href="#" title="귀고리">귀고리</a></li>
                      <li><a href="#" title="목걸이">목걸이</a></li>
                      <li><a href="#" title="반지">반지</a></li>
                      <li><a href="#" title="팔찌">팔찌</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="col">
            <a
              href="#"
              class="main-btn"
              title="악세서리"
              :class="['main-btn', { on: menu4 }]"
              @mouseenter="mouseenterMenu4"
              >악세서리</a
            >
            <div :class="['sub', 'sub4', { on: menu4, off: nav }]">
              <div class="sub-container">
                <ul>
                  <li>
                    <!-- 1열 -->
                    <ul>
                      <li><a href="#" title="블라우스">sub4 블라우스</a></li>
                      <li><a href="#" title="티">티</a></li>
                      <li><a href="#" title="셔츠">셔츠</a></li>
                      <li><a href="#" title="니트">니트</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 2열 -->
                    <ul>
                      <li><a href="#" title="자켓">자켓</a></li>
                      <li><a href="#" title="코트">코트</a></li>
                      <li><a href="#" title="가디건">가디건</a></li>
                      <li><a href="#" title="머플러">머플러</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 3열 -->
                    <ul>
                      <li><a href="#" title="청바지">청바지</a></li>
                      <li><a href="#" title="짧은바지">짧은바지</a></li>
                      <li><a href="#" title="긴바지">긴바지</a></li>
                      <li><a href="#" title="레깅스">레깅스</a></li>
                    </ul>
                  </li>
                  <li>
                    <!-- 4열 -->
                    <ul>
                      <li><a href="#" title="귀고리">귀고리</a></li>
                      <li><a href="#" title="목걸이">목걸이</a></li>
                      <li><a href="#" title="반지">반지</a></li>
                      <li><a href="#" title="팔찌">팔찌</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
  
<script>
export default {
  name: "HeaderComponent",
  props: [],
  data() {
    return {
      logo: "JUST 쇼핑몰",
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      nav: false,
    };
  },
  methods: {
    // 메서드스 => 이벤트 함수 구현은 여기에서 한다.
    // 마우스엔터 이벤트 => 실행할 콜백함수 mouseenterMenu(){}
    mouseenterMenu1() {
      // this.데이터상태변수 = '변경할 값'
      // 초기화
      this.menu1 = false;
      this.menu2 = false;
      this.menu3 = false;
      this.menu4 = false;

      // 현재 메인버튼 활성화
      this.menu1 = true;
    },
    mouseenterMenu2() {
      // 초기화
      this.menu1 = false;
      this.menu2 = false;
      this.menu3 = false;
      this.menu4 = false;

      // 현재 메인버튼 활성화
      this.menu2 = true;
    },
    mouseenterMenu3() {
      // 초기화
      this.menu1 = false;
      this.menu2 = false;
      this.menu3 = false;
      this.menu4 = false;

      // 현재 메인버튼 활성화
      this.menu3 = true;
    },
    mouseenterMenu4() {
      // 초기화
      this.menu1 = false;
      this.menu2 = false;
      this.menu3 = false;
      this.menu4 = false;

      // 현재 메인버튼 활성화
      this.menu4 = true;
    },

    // 네비게이션(GNB)
    // 마우스아웃 마우스떠나면
    // 모든 메인버튼, 서브메뉴 초기화
    mouseleaveNav() {
      // 먼저 실행하고 0.3초 =>  300,  1초 => 1000, 3초 => 3000  10초 10000
      this.nav = true;

      // 메인버튼, 서브메뉴
      setTimeout(() => {
        // 나중에 실행
        this.menu1 = false;
        this.menu2 = false;
        this.menu3 = false;
        this.menu4 = false;
        
        // nav 초기화
        this.nav = false;
      }, 300);
    },
  },
};
</script>
  
<style scoped>
/* 헤더 */
#wrap #header {
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  z-index: 3;
}

/* 로고 */
#wrap #header .left {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
}
#wrap #header .left h1 {
  width: 100%;
  height: 40px;
}
#wrap #header .left h1 a {
  font-size: 24px;
  font-weight: 600;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
#wrap #header .left h1 a span:nth-child(1) {
  color: #5ac;
}
#wrap #header .left h1 a span:nth-child(2) {
  margin-left: 5px;
  color: #c5a;
}

#wrap #header .right {
  width: 1000px;
  height: 100%;
}

/* 네비게이션 =>  메인메뉴 */
#wrap #header .right #nav {
  width: 700px;
  margin: 49px 20px 0 auto;
}
#wrap #header .right #nav > ul {
  display: flex;
  width: 100%;
}
#wrap #header .right #nav > ul > li {
  width: 25%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
#wrap #header .right #nav > ul > li:last-child {
  border-right: 1px solid #ddd;
}

#wrap #header .right #nav > ul > li > a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  /* transition: all 0.3s; */
  background: #fff;
}
#wrap #header .right #nav > ul > li > a:hover {
  background: #2c2a29;
  color: #669900;
}
/* 마우스이벤트 => on 가상클래스가 스타일 적용 */
#wrap #header .right #nav > ul > li > a.on {
  background: #2c2a29;
  color: #669900;
}

/* 서브메뉴 */
/* 스타벅스 서브메뉴와 같은 전체메뉴 숨김 */
#wrap #header .right #nav > ul > li .sub {
  display: none;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  background: #2c2a29;
  overflow: hidden;
}
#wrap #header .right #nav > ul > li .sub.on {
  /* 서브메뉴 높이 설정 */
  display: block;
  animation: slide-down 0.3s forwards;
}
@keyframes slide-down {
  0% {
    height: 0px;
  }
  100% {
    height: 160px;
  }
}

/* nav를 마우스가 떠나면 서브메뉴 부드럽게 접는다. 0.3초 */
#wrap #header .right #nav > ul > li .sub.off {
  animation: slide-up 0.3s forwards;
}
@keyframes slide-up {
  0% {
    height: 160px;
  }
  100% {
    height: 0px;
  }
}

/* #wrap #header .right #nav > ul > li .sub1 {display: block;} */

#wrap #header .right #nav > ul > li .sub .sub-container {
  width: 700px;
  margin: 0 20px 0 auto;
}
#wrap #header .right #nav > ul > li .sub .sub-container > ul {
  width: 100%;
  display: flex;
  padding: 20px 0;
}
#wrap #header .right #nav > ul > li .sub .sub-container > ul > li {
  width: 25%;
} /* 4칸 */
#wrap #header .right #nav > ul > li .sub .sub-container > ul > li > ul {
  width: 100%;
}
#wrap #header .right #nav > ul > li .sub .sub-container > ul > li > ul > li {
  width: 100%;
}
#wrap #header .right #nav > ul > li .sub .sub-container > ul > li > ul > li a {
  color: #999;
  display: flex;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
#wrap
  #header
  .right
  #nav
  > ul
  > li
  .sub
  .sub-container
  > ul
  > li
  > ul
  > li
  a:hover {
  background: #666;
  color: #fff;
}
</style>