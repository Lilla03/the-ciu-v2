
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css'
import './assets/styles/reponsive.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')




