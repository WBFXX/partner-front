import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
//pinia👆成套
app.use(router)

app.mount('#app')
app.use(ElementPlus)
