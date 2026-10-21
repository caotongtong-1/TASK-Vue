import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 只有main.js这里引入GlobalDemo做全局注册
import GlobalDemo from './experiments/03-register/GlobalDemo.vue'

const app = createApp(App)
app.component('GlobalDemo', GlobalDemo)
app.mount('#app')