import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)
const app = createApp(App).component('fa', FontAwesomeIcon)

app.use(router).mount('#app')
