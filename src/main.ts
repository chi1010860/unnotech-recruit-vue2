import '@/assets/base.scss'
import { Button, Col, InputNumber, Row } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(InputNumber)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
