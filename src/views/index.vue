<template>
  <div>
    <el-button @click="addUser">add</el-button>
    <About></About>
    <Minted></Minted>
    <div class="punks">
      <Punk></Punk>
      <Punk></Punk>
      <Punk></Punk>
      <Punk></Punk>
    </div>
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Minted from '@/components/Minted.vue';
import Punk from '@/components/Punk.vue';
import Web3 from 'web3';
import { abi } from '@/common/abi.js';
import gql from 'graphql-tag';
export default {
  name: 'index',
  components: {
    About,
    Minted,
    Punk
  },
  methods: {
    async local() {
      let web3;
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        const accounts = await web3.eth.getAccounts();
        web3.eth.defaultAccount = accounts[0];
        const contract = new web3.eth.Contract(abi, '0xED7CEb0369814997E1fDe6FCEfeEf7E290c51f77');
        console.log(contract);
        await contract.methods
          .setInfo('jjj', 25)
          .send({ from: web3.eth.defaultAccount })
          .then(res => {
            console.log(res);
          });
        await contract.methods
          .getInfo()
          .call()
          .then(res => {
            console.log(res);
          });
      }
    },
    async addUser() {
      console.log('add');
      // this.$apollo
      //   .mutate({
      //     mutation: gql`
      //       mutation(
      //         $id: ID!
      //         $face: String!
      //         $eyes: String!
      //         $mouth: String!
      //         $hair: String!
      //         $hat: String!
      //         $glasses: String!
      //       ) {
      //         createPunk(id: $id, face: $face, eyes: $eyes, mouth: $mouth, hair: $hair, hat: $hat, glasses: $glasses) {
      //           id
      //           face
      //           mouth
      //         }
      //       }
      //     `,
      //     // 参数
      //     variables: {
      //       id: 1,
      //       face: 'jjj',
      //       eyes: '1528164110@qq.com',
      //       mouth: 'mouthhjhh',
      //       hair: 'hairrrr',
      //       hat: 'hattt',
      //       glasses: 'glasssesssss'
      //     }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    getTableData() {
      console.log(this.$apollo);
      this.$apollo.addSmartQuery('punks', {
        query: gql`
          {
            punks {
              id
              face
              mouth
              eyes
            }
          }
          # {
          #   user(id: "1") {
          #     id
          #     name
          #     email
          #     age
          #   }
          # }
        `,
        result(response) {
          console.log(response);
        },
        error(error) {
          console.log('请求失败', error);
        }
      });
    }
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style lang="less" scoped>
.punks {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  padding: 0 140px;
}
</style>
