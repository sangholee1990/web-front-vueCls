<template>
  <section id="section2">
    <div class="left">
      <div class="container">
        <div class="title">
          <button :class="['notice-btn', { on: gallery }]" title="공지사항" @click="clickNotice">
            공지사항
          </button>
          <button :class="['gallery-btn', { on: gallery }]" title="갤러리" @click="clickGallery">
            갤러리
          </button>
        </div>
        <div class="content">
          <div :class="['notice-box', { on: gallery }]">
            <ul>
              <li v-for="item in 공지사항" :key="item.공지글" :data-key="item.공지글">
                <a href="#" class="popup-btn" :title="item.공지글" @click="clickModalOpen(item.공지글)">{{ item.공지글
                }}</a><span>{{ item.날짜 }}</span>
              </li>
            </ul>
          </div>
          <div :class="['gallery-box', { on: gallery }]">
            <ul>
              <li v-for="item in 갤러리" :key="item.타이틀" :data-key="item.타이틀">
                <a href="#" :title="item.타이틀"><img :src="item.이미지" :alt="item.타이틀" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="container">
        <div class="title hide">
          <h2>이벤트 배너</h2>
        </div>
        <div class="content" v-for="item in 배너" :key="item.타이틀" :data-key="item.타이틀">
          <a href="#" :title="item.타이틀" :style="item.이미지">
            <h3>{{ item.타이틀 }}</h3>
          </a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="container">
        <div class="title hide">
          <h2>바로가기 배너</h2>
        </div>
        <div class="content">
          <ul>
            <li v-for="item in 바로가기" :key="item.타이틀" :data-key="item.타이틀">
              <a href="#" :title="item.타이틀" :style="item.이미지"><span>{{ item.타이틀 }}</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section2Component",
  props: [],
  data() {
    return {
      gallery: false,
      // gallery: true,
      공지사항: [
        { 공지글: "9월 just 쇼핑몰 세일 안내!", 날짜: "2018-09-03" },
        { 공지글: "불편한 경험은 저희에게도 알려주세요.", 날짜: "2018-09-02" },
        { 공지글: "카카오톡 친구 추가하고 할인쿠폰 받아 가세요.", 날짜: "2018-09-01" },
        { 공지글: "다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?", 날짜: "2018-08-31" },
        { 공지글: "just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!", 날짜: "2018-08-30" },
      ],
      갤러리: [
        { 타이틀: "청바지, 블라우스, 파우치 홍보 여성 모델 이미지", 이미지: "./images/img1.jpg" },
        { 타이틀: "청바지, 크로스백, 썬글라스, 수영복 홍보 이미지", 이미지: "./images/img2.jpg" },
        { 타이틀: "노란 원피스 입은 모델 이미지", 이미지: "./images/img3.jpg" },
      ],
      배너: [
        { 타이틀: "여름 마지막 세일", 이미지: "background-image: url(./images/image4.jpg)" },
      ],
      바로가기: [
        { 타이틀: "할인정보", 이미지: "background-image: url(./images/image2.jpg)" },
        { 타이틀: "이벤트정보", 이미지: "background-image: url(./images/image.jpg)" },
        { 타이틀: "고객정보", 이미지: "background-image: url(./images/image3.jpg)" },
      ],

    };
  },
  methods: {
    clickGallery() {
      this.gallery = true;
    },
    clickNotice() {
      this.gallery = false;
    },
    // 레이어 팝업 열기
    // 에밋 Emit: 자식 컴포넌트 => 부모 컴포넌트 통신 
    // 프롭스 props: 부모 컴포넌트 => 자식 컴포넌트 통신 
    clickModalOpen(z) {
      this.$emit("clickModalOpenEmit", z)
    },
  },
};
</script>

<style lang="scss" scoped>
#wrap #main #section2 {
  width: 100%;
  height: 200px;
  display: flex;
  padding: 10px 0;
  user-select: none;

  .left {
    width: 33.333%;
    height: 100%;

    .container {
      width: 100%;
      height: 100%;
      position: relative;
      padding-top: 35px;

      .title {
        width: 100%;
        height: 36px;
        display: flex;
        padding: 0 0 0 10px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        button {
          padding: 0 10px;
          border: 0;
          border-radius: 5px 5px 0 0;
          height: 36px;

          &.notice-btn {
            border: 1px solid #ccc;
            border-bottom: 1px solid transparent;
            background: #fff;
            cursor: default;

            &.on {
              border: 1px solid #ccc;
              background: #f3f3f3;
              cursor: pointer;
            }
          }

          &.gallery-btn {
            border: 1px solid #ccc;
            background: #f3f3f3;
            cursor: pointer;

            &.on {
              border: 1px solid #ccc;
              border-bottom: 1px solid rgba(204, 204, 204, 0);
              background: #fff;
              cursor: default;
            }
          }
        }
      }

      .content {
        width: 100%;
        height: 145px;
        background: #fff;
        border: 1px solid #ccc;
        position: relative;
        z-index: 1;

        >div {
          width: 100%;
          height: 100%;
          padding: 0 10px;
          background: #fff;
        }

        div {
          &.notice-box {
            padding-top: 8px;
            display: block;

            &.on {
              display: none;
            }

            ul {
              width: 100%;

              li {
                width: 100%;
                line-height: 24.6px;
                border-bottom: 1px dotted #eee;
                padding-left: 13px;
                position: relative;
                display: flex;
                justify-content: space-between;

                /* 공지내용 텍스트 왼쪽 / 날짜 오른쪽 */

                &:last-child {
                  border-bottom: 0;
                }

                &::before {
                  content: "";
                  width: 2px;
                  height: 2px;
                  background: #333;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  margin-top: -1px;
                }

                a {
                  font-size: 14px;
                  width: 270px;
                  overflow: hidden;
                  display: block;
                  white-space: nowrap;
                  text-overflow: ellipsis;

                  &:hover {
                    text-decoration: underline;
                    color: #90f;
                  }
                }

                span {
                  color: #999;
                  font-size: 13px;
                }
              }
            }
          }

          &.gallery-box {
            background: #fff;
            display: none;

            &.on {
              display: block;
            }

            ul {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;

              li {
                width: 33.333%;

                a {
                  margin: 0 10px;
                  display: block;
                  overflow: hidden;

                  img {
                    width: 100%;
                    transition: all 0.3s;

                    &:hover {
                      transform: scale(1.1);
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

  /* 배너 */
  .center {
    width: 33.333%;
    height: 100%;
    background: #fff;
    padding: 0 0 0 10px;

    .container {
      width: 100%;
      height: 100%;
      border: 0px solid #ccc;

      .content {
        width: 100%;
        height: 100%;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url() no-repeat 50% 50%;
          background-size: cover;

          h3 {
            font-size: 24px;
            font-weight: 600;
            line-height: 50px;
            background: rgba(150, 230, 0, 0.6);
            color: #fff;
            width: 100%;
            text-align: center;
          }

          &:hover h3 {
            color: #fff;
          }
        }
      }
    }
  }

  .right {
    width: 33.333%;
    height: 100%;
    background: #fff;
    padding: 0 0 0 10px;

    .container {
      width: 100%;
      height: 100%;
      border: 0px solid #ccc;

      .content {
        width: 100%;
        height: 100%;

        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column nowrap;

          /* <= 세로정렬 / 가로정렬 => flex-flow: row nowrap;*/
          justify-content: space-between;

          li {
            width: 100%;

            a {
              display: flex;
              width: 100%;
              height: 55px;
              align-items: center;
              justify-content: center;
              background: url() no-repeat 50% 50%;
              background-size: cover;
              font-size: 17px;
              font-weight: 600;
            }

            // &:nth-child(1) a {
            //   background-image: url(../../../../public/images/image2.jpg);
            // }

            // &:nth-child(2) a {
            //   background-image: url(../../../../public/images/image.jpg);
            // }

            // &:nth-child(3) a {
            //   background-image: url(../../../../public/images/image3.jpg);
            // }
          }
        }
      }
    }
  }
}

/* 공지사항 & 갤러리 박스 */
/* 타이틀(버튼) */

/* 공지사항버튼 */

/* 갤러리버튼 */

/* 콘텐츠(목록 내용) 공지사항 내용 & 갤러리 내용 */

/* 공지사항 박스 갤러리 박스 공통스타일 */

/* 공지사항 박스 개별스타일 */

/* 1. 줄바꿈 없이 한줄로 표기    white-space: nowrap */
/* 2. 270픽셀 넘치는 텍스트 숨김 overflow: hidden */
/* 3. 말줄임표 표기 text-overflow: ellipsis */

/* 갤러리 박스 개별스타일 */

/* 이벤트 배너 */

/* 바로가기 배너 */
</style>
