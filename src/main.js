import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/exit'

import './style/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}-帝莎编程商城后台`
  const role = localStorage.getItem('TOKEN_KEY')
  const val = JSON.parse(role)
  console.log(val)
  next()
})

app.use(store).use(router).use(ElementPlus).mount('#app')
