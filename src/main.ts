import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'

const app = createApp(App)

for (let i in Icons) {
  // 注册全局组件
  // console.log((Icons as any)[i])
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app
  .use(router)
  .use(ElementPlus)
app.mount('#app')
