<!--  -->
<template>
  <div class="about">
    <h5 v-if="left == 0">All Avalanche Punks have been minted!</h5>
    <h1>
      Mint Your Rare
      <img :src="punk" class="punk" alt="" />
      AVAX Punk!
    </h1>
    <h2 class="tip">
      AVAX Punks are Originally Crafted Algorithmically Generated Punk NFTs on !
      <span class="red">Avalanche</span>
    </h2>
    <small>Avalanche Punks are living on Avalanche C-chain. Minting usually takes just seconds!</small>
  </div>
</template>

<script>
import Punk from '@/assets/punk.png';
import getContract from '@/utils/getContract.js';
export default {
  name: 'about',
  data() {
    return {
      punk: Punk,
      left: 0
    };
  },
  async mounted() {
    const contract = await getContract();
    const total = await this.$api.totalSupply(contract);
    const left = await this.$api.punksRemainingToAssign(contract);
    this.left = left;
    console.log(total, left);
  }
};
</script>
<style lang="less" scoped>
.about {
  padding: 20px 20px;
  .tip {
    margin-top: 60px;
  }
}
.punk {
  width: 140px;
  height: 140px;
  display: inline-block;
  vertical-align: middle;
}
.red {
  color: red;
}
</style>
