<template>
  <div class="app-wrapper">
    <div class="top-bar clearfix">
      <img @click="gotoIndex" :src="logo" class="logo" alt="" />
      <div class="menus">
        <router-link to="/index">twitter</router-link>
        <router-link to="/index">discord</router-link>
        <router-link to="/index">medium</router-link>
        <div class="wallet" v-if="!coinbase">
          <el-button @click="connect" type="danger" round>connect wallet</el-button>
        </div>
        <div class="wallet connected" v-else>
          <span class="spacing">{{ coinbase }} </span>
          <i class="el-icon-wallet spacing"></i>
          <el-button @click="gotoMy" type="danger" round>
            <span>My Punks</span>
          </el-button>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <transition name="el-fade-in" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="bottom-bar">
      <el-divider></el-divider>
      <div class="top-bar clearfix">
        <img :src="logo" class="logo" alt="" />
        <div class="menus">
          <router-link to="/index">twitter</router-link>
          <router-link to="/index">discord</router-link>
          <router-link to="/index">medium</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png';
import { mapState } from 'vuex';
import { getSubStr } from '@/utils/utils.js';

export default {
  name: 'Layout',
  data() {
    return {
      logo: Logo
    };
  },
  computed: mapState({
    coinbase: state => getSubStr(state.web3.coinbase)
  }),
  methods: {
    async connect() {
      if (!this.$store.state.web3.web3Instance) {
        await this.$store.dispatch('registerWeb3');
      }
    },
    gotoIndex() {
      this.$router.push({
        name: 'index'
      });
    },
    gotoMy() {
      this.$router.push({
        name: 'my'
      });
    }
  }
};
</script>

<style lang="less">
.app-wrapper {
  .top-bar {
    padding: 30px 60px;
  }
  a {
    text-decoration: none;
    margin-right: 20px;
  }
  .clearfix {
    display: block;
    content: '';
    clear: both;
  }
  .logo {
    width: 200px;
    height: 30px;
    float: left;
    cursor: pointer;
  }
  .menus {
    float: right;
  }
  .router-link-exact-active {
    margin-right: 20px;
  }
  .bottom-bar {
    // position: fixed;
    // width: 100%;
    // bottom: 0;
    padding-bottom: 20px;
    .el-divider--horizontal {
      margin: 0;
    }
  }
  .wallet {
    display: inline-block;
  }
  .connected {
    border: 1px solid red;
    border-radius: 9999px;
    padding: 2px 20px;
  }
  .spacing {
    margin-right: 10px;
  }
}
</style>
