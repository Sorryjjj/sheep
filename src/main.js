import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径,这里就不区分环境开发了
  uri: 'http://localhost:4000/graphql'
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(ElementUI)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
