import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import './assets/icon/iconfont.css'
import VueResource from 'vue-resource';
Vue.use(VueResource);

import "./assets/styles/index.scss";

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
