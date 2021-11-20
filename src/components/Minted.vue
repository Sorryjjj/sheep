<!--  -->
<template>
  <div class="minted">
    <img :src="minted" class="head spacing" alt="" />
    <h3 class="h3">AVAX PUNKS FULLY MINTED!</h3>
    <div class="count left">
      <span class="cnt">{{ left }}</span>
      <span class="left-10">/ {{ total }}</span>
    </div>
  </div>
</template>

<script>
import Minted from '@/assets/minted.png';
import getContract from '@/utils/getContract.js';

export default {
  name: 'minted',
  data() {
    return {
      minted: Minted,
      left: '',
      total: ''
    };
  },
  async mounted() {
    const contract = await getContract();
    let total, left;
    try {
      total = await this.$api.totalSupply(contract);
      left = await this.$api.punksRemainingToAssign(contract);
      this.left = left;
      this.total = total;
    } catch (error) {
      console.log(error);
      this.$message.error('Please change network to Moonriver Kusama');
    }
  }
};
</script>
<style lang="less" scoped>
.minted {
  background-color: rgba(57, 52, 76, 1);
  padding: 10px 20px;
  border-radius: 9999px;
  width: auto;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 80px;
}
.head {
  width: 40px;
  height: 40px;
}
.count {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cnt {
  border-bottom: 1px solid #e84142;
  font-size: 24px;
}
.left {
  margin-left: 20px;
  &-10 {
    margin-left: 10px;
  }
}

.spacing {
  margin-right: 10px;
}
</style>
