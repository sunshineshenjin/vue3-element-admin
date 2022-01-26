import { store, key } from './store';
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import route from './router'
import './css/main.css'
import 'element-plus/dist/index.css'
createApp(App).use(store, key).use(ElementPlus).use(route).mount('#app')
