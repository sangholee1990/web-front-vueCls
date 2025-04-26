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

          <li 
            v-for="item, idx in gnb"
            :key="item.메인메뉴"

            class="col" 
            :data-key="item.메인메뉴"
          >
            <a
              href="#"
              :class="['main-btn', { on: menu[idx] }]"
              :title="item.메인메뉴"
              @mouseenter="mouseenterMenu(idx)"
              >{{item.메인메뉴}}</a
            >
            <div :class="['sub', `sub${idx+1}`, { 'on': menu[idx], 'off': nav }]">
              <div class="sub-container">
                <ul>

                  <li
                    v-for="item2, idx2 in item.서브메뉴"
                    :key="idx2"
                    :data-key="idx2"
                  >                      
                      <ul>
                        
                          <li
                            v-for="item3, idx3 in item2"
                            :key="idx3"
                            :data-key="idx3"
                          >
                            <a href="#" :title="item3">
                              {{item3}}
                            </a>
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

  <!-- 로딩시 메인페이지 보이고,
  링크에서 클릭된 페이지로 교체된다. -->

  <router-view />

</template>
  
<script>
export default {
  name: "HeaderComponent",
  props: [],
  data() {
    return {
      logo: "",      
      menu: Array(4).fill(false),
      nav: false,
      gnb: []  // GNB 외부테이터 사용 => [public] header.json
    };
  },
  created(){

    // gnb json 데이터 가져오기
    fetch('./data/header.json')
    .then((res)=>res.json())  // json 변환
    .then((res)=>{
        console.log( res );
        this.gnb = res.gnb;
        this.logo = res.logo;
    })
    .catch((err)=>{
      console.log(err);
    });

  },
  methods: {

    // 마우스 이벤트 전달 함수(매개변수 0 1 2 3 )
    // mouseenterMenu1() ... mouseenterMenu4()
    mouseenterMenu(n) {   
      this.menu = Array(4).fill(false);  // this.menu= [false,false,false,false]
      this.menu[n] = true;
    },    

    // 네비게이션(GNB)
    // 마우스아웃 마우스떠나면
    // 모든 메인버튼, 서브메뉴 초기화
    mouseleaveNav() {
      this.nav = true;

      // 메인버튼, 서브메뉴 초기화
      setTimeout(() => {
        this.menu = Array(4).fill(false);  // this.menu = [false,false,false,false]
        this.nav = false;
      }, 300);
    },
  },
};
</script>
  
<style lang="scss" scoped>
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
      margin: 50px 20px 0 auto;

      > ul {
        display: flex;
        width: 100%;

        > li {
          width: 25%;
          border: 0;

          &:last-child {
            border: 0;
          }

          > a {
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

            &:hover, &.on {
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

              > ul {
                width: 100%;
                display: flex;
                padding: 20px 0;

                > li {
                  width: 25%;

                  > ul {
                    width: 100%;

                    > li {
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

</style>