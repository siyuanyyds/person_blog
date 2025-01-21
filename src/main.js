import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'  // 引入路由配置
import axios from 'axios'  // 引入 Axios
import 'vuetify/styles'; // 引入 Vuetify 的全局样式



createApp(App)
  .provide('axios', axios)
  .use(router)  // 注册路由 
  .use(vuetify)  // 确保使用 Vuetify
  .mount('#app')
