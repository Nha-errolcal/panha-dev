import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import App from './App.vue'
import router from './app/routes/index.ts'

const app = createApp(App);
app.use(router)
app.use(MotionPlugin)
app.mount('#app');