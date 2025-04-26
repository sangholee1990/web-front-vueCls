<template>
  <main id="sub1">
    <h1>서브 1 페이지</h1>
    <section id="section1">
      <div class="container">
        <div class="title">
          <h2>TODO LIST</h2>
        </div>
        <div class="content">
          <div class="input-box">
            <input type="text" placeholder="할일을 입력하세요 " v-model="todoList">
          </div>
          <div class="list-box">
            <ul class="todo-list">
              <li>
                <input type="checkbox" name="" id="">
                <p>할일 내용</p>
                <button>×</button>
              </li>
            </ul>

            <!-- 할일 완료목록 리스트 상자 -->
            <ul class="todo-complete-list">
              <!-- 할일 완료목록 리스트 반복문 구현 -->
              <li>
                <input type="checkbox" name="" id="">
                <p>할일 내용</p>
                <button>×</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="section2"></section> -->
  </main>
</template>


<script>
export default {
  name: "Sub1Component",
  data() {
    return {
      todoList: []
    }
  }
};
</script>

<style lang="scss" scoped>
#sub1 {
  width: 100%;
  background: #f9f9f9;

  #section1 {
    width: 100%;
    padding: 60px;

    .container {
      width: 100%;

      .title {
        width: 100%;
        padding: 0 0 40px 0;

        h2 {
          width: 100%;
          font-size: 28px;
          font-weight: 600;
          color: #37d;
          text-align: center;
        }
      }

      .content {
        width: 100%;

        .input-box {
          width: 100%;
          height: 60px;
          border: 1px solid #ccc;
          background: #fff;
          padding: 0 30px;
          &::placeholder {
            font-size: 16px;
            color: #aaa;
          }
        }
      }
    }
  }

  // height: 550px;
  // background: #09c;
  // display: flex;

  // h1 {
  //   margin: auto;
  //   font-size: 100px;
  //   color: #fff;
  // }
}
</style>