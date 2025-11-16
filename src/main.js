import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
import { createPinia } from 'pinia'

