/*
 * @Author: xiatian
 * @Date: 2020-05-25 19:46:35
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 09:43:54
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // l
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale, size: 'small' });

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
