<!--  -->
<template>
  <div class="box">
    <div class="wrapper"></div>
    <div class="info">
      <div class="title text-left">
        Sheep and Wolves competing for $WOOL on a farm in the metaverse. Nothing but blockchain. No roadmap. Fully in
        the Public Domain.
      </div>
      <div class="content">
        <span style="margin-right: 10px">WHITEPAPER</span>
        <img src="../assets/public-domain.png" alt="" class="domain" />
      </div>
      <div>
        <p class="service"><u>TERMS OF SERVICE</u></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.box {
  width: 600px;
  display: table;
  margin: 0 auto;
  font-family: BrokenConsoleBold, Helvetica, sans-serif;
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
  .content {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
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
