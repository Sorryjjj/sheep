<!--  -->
<template>
    <div class='punk'>
        <div class="head">
            <router-link to='/'>Visit</router-link>
            <router-link to='/'>#2104</router-link>

        </div>
        <div>
            <img :src="image" class="image" alt="">
        </div>
        <div class="content">
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
            <div><span class="text">Face:</span>Skeleton</div>
        </div>
    </div>
</template>

<script>
import Minted from '@/assets/minted.png'

export default {
  components: { },
  data () {
    return {
      image: Minted
    }
  }
}
</script>
<style lang='less' scoped>
.punk {
    border-radius: 10px;
    box-shadow: 0 0 8px 0 #e9edf5;
    padding-bottom: 20px;
    .head {
        background-color: rgba(108,43,217,1);
        height: 112px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 20px 20px;
        box-sizing: border-box;
    }
    .router-link-active {
        color:orange;
        display: block;
        font-size: 20px;
        width: auto;
        text-align: left;
    }
    .image  {
        width: 128px;
        height: 128px;
        margin-top: -64px;
    }
    .bold {
        font-weight: bold;
    }
    .content {
        p {
            line-height: 1px !important;
            margin-bottom: 6px !important;
        }
        .text {
            font-weight: bold;
        }
    }
}
</style>
