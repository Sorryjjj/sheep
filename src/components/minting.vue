<!--  -->
<template>
  <div class="box">
    <div class="wrapper"></div>
    <div class="info">
      <div class="title">
        <h1>MINTING</h1>
      </div>
      <div class="">
        <h3 class="black">13809 / 50000 MINTED</h3>
        <h2>MINTING PAUSED</h2>
        <h3 class="text-left ">Staking and earning $WOOL is still enabled.</h3>
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
}
</style>
