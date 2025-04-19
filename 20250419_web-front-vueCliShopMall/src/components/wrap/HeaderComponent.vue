<template>
  <header id="header">
    <div class="left">
      <h1>
        <a href="./index.html" :title="logo"><span>{{ logo.split(" ")[0] }}</span>
          <span>{{ logo.split(" ")[1] }}</span></a>
      </h1>
    </div>
    <div class="right">
      <nav id="nav" @mouseleave="mouseleaveNav">
        <ul>
          <li v-for="item, idx in gnb" :key="item.메인메뉴" class="col" :data-key="item.메인메뉴">
            <a href="#" :class="['main-btn', { on: menu[idx] }]" title={{item.메인메뉴}}
              @mouseenter="mouseenterMenu(idx)">{{ item.메인메뉴 }}</a>
            <div :class="['sub', `sub${idx + 1}`, { on: menu[idx], off: nav }]">
              <div class="sub-container">
                <ul>
                  <li v-for="item2, idx2 in item.서브메뉴" :key="idx2" :data-key="idx2">
                    <ul>
                      <li v-for="item3, idx3 in item2" :key="idx3" :data-key="idx3">
                        <a href="#" :title="item3">{{ item3 }}</a>
                      </li>
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
      // menu: [false, false, false, false]
      menu: Array(4).fill(false),
      nav: false,
      gnb: [
        {
          메인메뉴: '탑',
          서브메뉴: [
            ["sub1 블라우스", "티", "셔츠", "니트"],
            ["자켓", "코트", "셔츠", "머플러"],
            ["청바지", "짧은바지", "긴바지", "레깅스"],
            ["귀고리", "목걸이", "반지", "레깅스"],
          ]
        },
        {
          메인메뉴: '아우터',
          서브메뉴: [
            ["sub2 블라우스", "티", "셔츠", "니트"],
            ["자켓", "코트", "셔츠", "머플러"],
            ["청바지", "짧은바지", "긴바지", "레깅스"],
            ["귀고리", "목걸이", "반지", "레깅스"],
          ]
        },
        {
          메인메뉴: '팬츠',
          서브메뉴: [
            ["sub3 블라우스", "티", "셔츠", "니트"],
            ["자켓", "코트", "셔츠", "머플러"],
            ["청바지", "짧은바지", "긴바지", "레깅스"],
            ["귀고리", "목걸이", "반지", "레깅스"],
          ]
        },
        {
          메인메뉴: '악세사리',
          서브메뉴: [
            ["sub4 블라우스", "티", "셔츠", "니트"],
            ["자켓", "코트", "셔츠", "머플러"],
            ["청바지", "짧은바지", "긴바지", "레깅스"],
            ["귀고리", "목걸이", "반지", "레깅스"],
          ]
        },
      ],
    };
  },
  created() {
    console.log(this.gnb);
    console.log(this.gnb.length);
  },
  methods: {
    // 마우스 이벤트 전달 함수
    mouseenterMenu(n) {
      this.menu = Array(this.gnb.length).fill(false);
      this.menu[n] = true;
    },

    // 모든 메인버튼, 서브메뉴 초기화
    mouseleaveNav() {
      // 먼저 실행하고 0.3초 =>  300,  1초 => 1000, 3초 => 3000  10초 10000
      this.nav = true;

      // 메인버튼, 서브메뉴
      setTimeout(() => {
        this.menu = Array(this.gnb.length).fill(false);

        // nav 초기화
        this.nav = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
// scss 중첩 코딩
// #wrap {
//   #header {
//   }
// }

/* 헤더 */

#wrap #header {
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  z-index: 3;

  .left {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;

    h1 {
      width: 100%;
      height: 40px;

      a {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;

        span {
          &:nth-child(1) {
            color: #5ac;
          }

          &:nth-child(2) {
            margin-left: 5px;
            color: #c5a;
          }
        }
      }
    }
  }

  .right {
    width: 1000px;
    height: 100%;

    #nav {
      width: 700px;
      margin: 49px 20px 0 auto;

      >ul {
        display: flex;
        width: 100%;

        >li {
          width: 25%;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          border-left: 1px solid #ddd;

          &:last-child {
            border-right: 1px solid #ddd;
          }

          >a {
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

            &:hover,
            &.on {
              background: #2c2a29;
              color: #669900;
            }
          }

          .sub {
            display: none;
            position: absolute;
            top: 100px;
            left: 0;
            width: 100%;
            background: #2c2a29;
            overflow: hidden;

            &.on {
              /* 서브메뉴 높이 설정 */
              display: block;
              animation: slide-down 0.3s forwards;
            }

            &.off {
              animation: slide-up 0.3s forwards;
            }

            .sub-container {
              width: 700px;
              margin: 0 20px 0 auto;

              >ul {
                width: 100%;
                display: flex;
                padding: 20px 0;

                >li {
                  width: 25%;

                  >ul {
                    width: 100%;

                    >li {
                      width: 100%;

                      a {
                        color: #999;
                        display: flex;
                        height: 30px;
                        width: 100%;
                        align-items: center;
                        justify-content: center;

                        &:hover {
                          background: #666;
                          color: #fff;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* 로고 */

/* 네비게이션 =>  메인메뉴 */

/* 마우스이벤트 => on 가상클래스가 스타일 적용 */

/* 서브메뉴 */
/* 스타벅스 서브메뉴와 같은 전체메뉴 숨김 */

@keyframes slide-down {
  0% {
    height: 0px;
  }

  100% {
    height: 160px;
  }
}

/* nav를 마우스가 떠나면 서브메뉴 부드럽게 접는다. 0.3초 */

@keyframes slide-up {
  0% {
    height: 160px;
  }

  100% {
    height: 0px;
  }
}

/* #wrap #header .right #nav > ul > li .sub1 {display: block;} */

/* 4칸 */
</style>