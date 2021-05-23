// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import xlsx from 'xlsx'
// import '@/wbjs/resize.js'
import less from 'less'
Vue.use(less)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import xios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import Vant from 'vant';
import scriptloader from 'script-loader'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';
Vue.config.productionTip = false;
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './vuexss';
// 百度地图
import BaiduMap from 'vue-baidu-map'
// Vue.use(BaiduMap, {
//   ak: 'NcbiRo0S36DaYTWhyQ6zpRKlfPc2w9s1'
// })
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
