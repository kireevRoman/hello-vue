import {createApp} from 'vue'
import App from './App'
import components from '@/components/UI'

import '@/assets/scss/main.scss'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')