<!--  -->
<template>
  <div class="box">
    <div class="wrapper"></div>
    <div class="info">
      <div class="head">
        <u>GAME STATUS</u>
        <u style="margin-left:20px">LEADERBOARD</u>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.box {
  width: 450px;
  display: table;
  margin: 0 auto;
  background-color: rgba(237, 227, 209, 0.8);
}

.wrapper {
  background-image: url(../assets/wood-mask.svg);
  background-repeat: repeat;
  background-size: 100%;
  opacity: 0.04;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.info {
  position: relative;
  color: rgba(177, 29, 24, 1);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;

  .title {
    font-size: 16px;
  }
  .domain {
    width: 160px;
    height: 50px;
  }
  .service {
    cursor: pointer;
  }

  u {
    cursor: pointer;
  }
}
</style>
