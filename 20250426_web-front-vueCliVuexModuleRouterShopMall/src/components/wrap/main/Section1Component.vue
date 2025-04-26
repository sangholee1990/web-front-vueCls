<template>
  <section id="section1">
    <div class="slide-container">
      <div class="slide-content">
        <ul class="slide-wrap">

          <li 
            v-for="item,idx in 슬라이드"
            :key="item.타이틀"
            :data-key="item.타이틀"
            :class="['slide', `slide${idx+1}`]"     
            
          >
            <a 
              href="#" 
              :title="item.타이틀"  
              :style="item.배경이미지"           
              >
                <span>{{item.타이틀}}</span>
            </a
          >
          </li>


        </ul>
      </div>
    </div>
  </section>
</template>
  
  
  <script>
export default {
  name: "Section1Component",
  data(){
    return{
      슬라이드: []
    }
  },
  created(){
        // gnb json 데이터 가져오기
        fetch('./data/section1.json')
        .then((res)=>res.json())  // json 변환
        .then((res)=>{
            console.log( res );
            this.슬라이드 = res.슬라이드;
        })
        .catch((err)=>{
          console.log(err);
        });
  },
  mounted() {
    
    function mainSlideFn(){
      
        //1. 변수
        let cnt = 0;

        // DOM 선택자 => 마운트 되고 난 후에 사용
        // 슬라이드 대상 선택자
        const slide = document.querySelectorAll(".slide"); // 3개

        //2. 메인슬라이드함수 3개 우측에서 좌측으로 이동  0 1 2
        function mainSlide() {
          // 모든 슬라이드 .slide 3개 z-index: 1 설정 초기화
          // 모든 슬라이드 .slide 3개 opacity: 1 설정 초기화
          slide.forEach(function (item) {
            item.style = "z-index:1; opacity:1";
          });

          // 다음슬라이드 z-index: 2
          slide[cnt].style = "z-index:2";
          // 현재슬라이드 z-index: 3
          slide[cnt - 1 < 0 ? 2 : cnt - 1].style = "z-index:3; opacity: 0";
        }

        //3. 다음카운트함수
        function mextCount() {
          cnt++; // 1 2 0 1 2 0 ......
          if (cnt >= 3) {
            cnt = 0;
          }
          mainSlide();
        }

        //4. 자동타이머함수
        function autotimer() {
          setInterval(mextCount, 3000); // 3초간격 무한반복
        }
        autotimer();
    }

    setTimeout(mainSlideFn, 100); // 0.1초 후에 실행

  },
};
</script>
  
<style lang="scss" scoped>
/* 메인 */

#wrap #main #section1 {
  width: 100%;
  height: 300px;
  background-color: #c9c;

  .slide-container {
    width: 100%;
    height: 100%;

    .slide-content {
      width: 100%;
      height: 100%;
      overflow: hidden;

      .slide-wrap {
        width: 100%;
        height: 100%;
        position: relative;

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 1s ease-in-out;                 
        }

      
        .slide a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          background: url() no-repeat 50% 50%;
          span {
            width: 100%;
            height: 70px;
            background: rgba(85, 170, 204, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #fff;
            user-select: none;
          }
        }

        .slide1 {          
          z-index: 3;
          a {
            background-position: 50% 30%;
            background-size: 120% auto;
          }
        }

        .slide2 {
          z-index: 2;
          a {
            background-position: 50% 0%;
            background-size: 100% auto;
          }
        }

        .slide3 {
          z-index: 1;
          a {
            background-position: 50% 30%;
            background-size: 110% auto;
          }
        }



        .slide2 a span {
          background-color: rgba(204, 85, 170, 0.9);
        }

        .slide3 a span {
          background-color: rgba(250, 120, 85, 0.9);
        }
      }
    }
  }
}

/* 메인슬라이드 아래에서 위로이동 */

</style>