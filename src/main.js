// main.js
import './assets/tailwindcss.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/Icon.vue'

const app = createApp(App)

app.use(router)
app.component('Icon', Icon)

app.mount('#app')
