<template>
  <main id="sub1">
    <h1>서브 1 페이지</h1>
  </main>
</template>


<script>
export default {
  name: "Sub1Component",
};
</script>

<style lang="scss" scoped>
#sub1 {
  width: 100%;
  height: 550px;
  background: #09c;
  display: flex;

  h1 {
    margin: auto;
    font-size: 100px;
    color: #fff;
  }
}
</style>