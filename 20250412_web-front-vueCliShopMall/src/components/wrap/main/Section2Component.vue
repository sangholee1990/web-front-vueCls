<template>
  <section id="section2">
    <div class="left">
      <div class="container">
        <div class="title">
          <button class="notice-btn" title="공지사항">공지사항</button>
          <button class="gallery-btn" title="갤러리">갤러리</button>
        </div>
        <div class="content">
          <div class="notice-box">
            <ul>
              <li>
                <a href="#" class="popup-btn" title="9월 just 쇼핑몰 세일 안내!"
                  >9월 just 쇼핑몰 세일 안내!</a
                ><span>2018-09-03</span>
              </li>
              <li>
                <a href="#" title="불편한 경험은 저희에게도 알려주세요."
                  >불편한 경험은 저희에게도 알려주세요.</a
                ><span>2018-09-02</span>
              </li>
              <li>
                <a href="#" title="카카오톡 친구 추가하고 할인쿠폰 받아 가세요."
                  >카카오톡 친구 추가하고 할인쿠폰 받아 가세요.</a
                ><span>2018-09-01</span>
              </li>
              <li>
                <a
                  href="#"
                  title="다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?"
                  >다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?</a
                ><span>2018-08-31</span>
              </li>
              <li>
                <a
                  href="#"
                  title="just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!"
                  >just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!</a
                ><span>2018-08-30</span>
              </li>
            </ul>
          </div>
          <div class="gallery-box">
            <ul>
              <li>
                <a
                  href="#"
                  title="청바지, 블라우스, 파우치 홍보 여성 모델 이미지"
                  ><img
                    src="../../../../public/images/img1.jpg"
                    alt="청바지, 블라우스, 파우치 홍보 여성 모델 이미지"
                /></a>
              </li>
              <li>
                <a
                  href="#"
                  title="청바지, 크로스백, 썬글라스, 수영복 홍보 이미지"
                  ><img
                    src="../../../../public/images/img2.jpg"
                    alt="청바지, 크로스백, 썬글라스, 수영복 홍보 이미지"
                /></a>
              </li>
              <li>
                <a href="#" title="노란 원피스 입은 모델 이미지"
                  ><img
                    src="../../../../public/images/img3.jpg"
                    alt="노란 원피스 입은 모델 이미지"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="container">
        <div class="title hide"><h2>이벤트 배너</h2></div>
        <div class="content">
          <a href="#" title="여름 마지막 세일"><h3>여름 마지막 세일</h3></a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="container">
        <div class="title hide"><h2>바로가기 배너</h2></div>
        <div class="content">
          <ul>
            <li>
              <a href="#" title="할인정보"><span>할인정보</span></a>
            </li>
            <li>
              <a href="#" title="이벤트정보"><span>이벤트정보</span></a>
            </li>
            <li>
              <a href="#" title="고객정보"><span>고객정보</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
  
  
<script>
import $ from "jquery";

export default {
  name: "Section2Component",
  created() {
    $(() => {
   // 갤러리버튼 클릭 이벤트
        $('.gallery-btn').on({
            click(){
                $('.gallery-btn').addClass('on');
                $('.notice-btn').addClass('on');
                $('.notice-box').hide();
                $('.gallery-box').show();
            }
        })

          // 공지사항버튼 클릭 이벤트
          $('.notice-btn').on({
            click(){
                $('.gallery-btn').removeClass('on');
                $('.notice-btn').removeClass('on');
                $('.notice-box').show();
                $('.gallery-box').hide();
            }
        })

        // 팝업버튼 클릭 이벤트
        $('.popup-btn').on({
            click(){
                $('.popup').css({display:'flex'}); // show().css({display:'flex'})
            }
        });
        // 팝업닫기버튼 클릭 이벤트
        $('.close-btn').on({
            click(){
                // $('.popup').hide();
                $('.popup').css({display:'none'}); // hide()
            }
        });
    })
  }
};
</script>
  
<style scoped>
#wrap #main #section2 {
  width: 100%;
  height: 200px;
  display: flex;
  padding: 10px 0;
  user-select: none;
}
#wrap #main #section2 .left {
  width: 33.333%;
  height: 100%;
}
#wrap #main #section2 .left .container {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 35px;
}

/* 공지사항 & 갤러리 박스 */
/* 타이틀(버튼) */
#wrap #main #section2 .left .container .title {
  width: 100%;
  height: 36px;
  display: flex;
  padding: 0 0 0 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
#wrap #main #section2 .left .container .title button {
  padding: 0 10px;
  border: 0;
  border-radius: 5px 5px 0 0;
  height: 36px;
}

/* 공지사항버튼 */
#wrap #main #section2 .left .container .title button.notice-btn {
  border: 1px solid #ccc;
  border-bottom: 1px solid transparent;
  background: #fff;
  cursor: default;
}
#wrap #main #section2 .left .container .title button.notice-btn.on {
  border: 1px solid #ccc;
  background: #f3f3f3;
  cursor: pointer;
}

/* 갤러리버튼 */
#wrap #main #section2 .left .container .title button.gallery-btn {
  border: 1px solid #ccc;
  background: #f3f3f3;
  cursor: pointer;
}
#wrap #main #section2 .left .container .title button.gallery-btn.on {
  border: 1px solid #ccc;
  border-bottom: 1px solid rgba(204, 204, 204, 0);
  background: #fff;
  cursor: default;
}

/* 콘텐츠(목록 내용) 공지사항 내용 & 갤러리 내용 */
#wrap #main #section2 .left .container .content {
  width: 100%;
  height: 145px;
  background: #fff;
  border: 1px solid #ccc;
  position: relative;
  z-index: 1;
}
/* 공지사항 박스 갤러리 박스 공통스타일 */
#wrap #main #section2 .left .container .content > div {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background: #fff;
}

/* 공지사항 박스 개별스타일 */
#wrap #main #section2 .left .container .content div.notice-box {
  padding-top: 8px;
}
#wrap #main #section2 .left .container .content div.notice-box ul {
  width: 100%;
}
#wrap #main #section2 .left .container .content div.notice-box ul li {
  width: 100%;
  line-height: 24.6px;
  border-bottom: 1px dotted #eee;
  padding-left: 13px;
  position: relative;
  display: flex;
  justify-content: space-between; /* 공지내용 텍스트 왼쪽 / 날짜 오른쪽 */
}
#wrap
  #main
  #section2
  .left
  .container
  .content
  div.notice-box
  ul
  li:last-child {
  border-bottom: 0;
}
#wrap #main #section2 .left .container .content div.notice-box ul li::before {
  content: "";
  width: 2px;
  height: 2px;
  background: #333;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -1px;
}

/* 1. 줄바꿈 없이 한줄로 표기    white-space: nowrap */
/* 2. 270픽셀 넘치는 텍스트 숨김 overflow: hidden */
/* 3. 말줄임표 표기 text-overflow: ellipsis */
#wrap #main #section2 .left .container .content div.notice-box ul li a {
  font-size: 14px;
  width: 270px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#wrap #main #section2 .left .container .content div.notice-box ul li a:hover {
  text-decoration: underline;
  color: #90f;
}

#wrap #main #section2 .left .container .content div.notice-box ul li span {
  color: #999;
  font-size: 13px;
}

/* 갤러리 박스 개별스타일 */
#wrap #main #section2 .left .container .content div.gallery-box {
  background: #fff;
  display: none;
}
#wrap #main #section2 .left .container .content div.gallery-box ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
#wrap #main #section2 .left .container .content div.gallery-box ul li {
  width: 33.333%;
}
#wrap #main #section2 .left .container .content div.gallery-box ul li a {
  margin: 0 10px;
  display: block;
  overflow: hidden;
}
#wrap #main #section2 .left .container .content div.gallery-box ul li a img {
  width: 100%;
  transition: all 0.3s;
}
#wrap
  #main
  #section2
  .left
  .container
  .content
  div.gallery-box
  ul
  li
  a
  img:hover {
  transform: scale(1.1);
}

/* 이벤트 배너 */
#wrap #main #section2 .center {
  width: 33.333%;
  height: 100%;
  background: #fff;
  padding: 0 0 0 10px;
}
#wrap #main #section2 .center .container {
  width: 100%;
  height: 100%;
  border: 0px solid #ccc;
}
#wrap #main #section2 .center .container .content {
  width: 100%;
  height: 100%;
}
#wrap #main #section2 .center .container .content a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../../../public/images/image4.jpg) no-repeat 50% 50%;
  background-size: cover;
}
#wrap #main #section2 .center .container .content a h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 50px;
  background: rgba(150, 230, 0, 0.6);
  color: #fff;
  width: 100%;
  text-align: center;
}
#wrap #main #section2 .center .container .content a:hover h3 {
  color: #fff;
}

/* 바로가기 배너 */
#wrap #main #section2 .right {
  width: 33.333%;
  height: 100%;
  background: #fff;
  padding: 0 0 0 10px;
}
#wrap #main #section2 .right .container {
  width: 100%;
  height: 100%;
  border: 0px solid #ccc;
}
#wrap #main #section2 .right .container .content {
  width: 100%;
  height: 100%;
}
#wrap #main #section2 .right .container .content ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap; /* <= 세로정렬 / 가로정렬 => flex-flow: row nowrap;*/
  justify-content: space-between;
}
#wrap #main #section2 .right .container .content ul li {
  width: 100%;
}
#wrap #main #section2 .right .container .content ul li a {
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

#wrap #main #section2 .right .container .content ul li:nth-child(1) a {
  background-image: url(../../../../public/images/image2.jpg);
}
#wrap #main #section2 .right .container .content ul li:nth-child(2) a {
  background-image: url(../../../../public/images/image.jpg);
}
#wrap #main #section2 .right .container .content ul li:nth-child(3) a {
  background-image: url(../../../../public/images/image3.jpg);
}
</style>