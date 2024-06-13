import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ui from '@/ui'
import '@/assets/main.css'

const app = createApp(App)

ui.map(component => app.component(component.name, component))

app.use(store)
app.use(router)
app.mount('#app')
