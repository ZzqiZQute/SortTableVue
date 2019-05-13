import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import SuperLoading from 'super-loading'
Vue.use(SuperLoading);
new Vue({
  render: h => h(App),
}).$mount('#app')
