<!--  -->
<template>
  <div class="my-punks">
    <h1 class="owned">
      <img :src="punk" class="punk-sm" alt="" />
      0 Owned Avalanche Punk
    </h1>
  </div>
</template>

<script>
import Punk from '@/assets/punk.png';

export default {
  components: {},
  data() {
    return {
      punk: Punk
    };
  }
};
</script>
<style lang="less" scoped>
.punk-sm {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.my-punks {
  padding-top: 20px;
  font-size: 25px;
}
.owned {
  display: flex;
  align-items: center;
  padding: 0 100px;
}
</style>
