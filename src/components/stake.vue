<!--  -->
<template>
  <div class="box">
    <div class="wrapper"></div>
    <div class="info">
      <h4 class="black">$WOOL in your wallet: ? $WOOL</h4>
      <h1>UNSTAKED</h1>
      <div class="box box-sm">
        <div class="wrapper"></div>
        <div class="info">
          <div>CONNECT METAMASK</div>
        </div>
      </div>
      <h1>STAKED</h1>
      <div class="box box-sm" style="margin-bottom: 20px">
        <div class="wrapper"></div>
        <div class="info">
          <div>CONNECT METAMASK</div>
        </div>
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

.box-sm {
  border-width: 10px;
  width: 80%;
  padding: 0;
  font-size: 20px;
}
h1 {
  font-size: 40px;
}
</style>
