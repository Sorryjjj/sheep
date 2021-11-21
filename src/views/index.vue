<template>
  <div class="index">
    <h1 class="title">WOLF GAME</h1>
    <Info></Info>
    <div class="boxes">
      <div class="left-box">
        <Minting></Minting>
        <Status class="status"></Status>
      </div>
      <div class="stake">
        <Stake></Stake>
      </div>
    </div>
  </div>
</template>

<script>
import Info from '@/components/Info.vue';
import Minting from '@/components/minting.vue';
import Stake from '@/components/stake.vue';
import Status from '@/components/status.vue';

export default {
  name: 'index',
  components: {
    Info,
    Minting,
    Stake,
    Status
  }
};
</script>

<style lang="less" scoped>
.index {
  font-family: PIXELCRAFT;
  .title {
    font-size: 60px;
    font-family: PIXELCRAFT;
    color: transparent;
    background: linear-gradient(180deg, #b11d18 65%, #862227 65% 100%);
    -webkit-background-clip: text;
    filter: drop-shadow(5 px 5 px 0 #000000);
  }
  .boxes {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .stake {
      flex-direction: column;
    }
    .status {
      margin-top: 40px;
    }
  }
}
</style>
