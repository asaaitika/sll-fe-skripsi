import {
  createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Library Components
import VueSweetalert2 from 'vue-sweetalert2'
import VueApexCharts from 'vue3-apexcharts'
import BootstrapVue3 from 'bootstrap-vue-3'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import CounterUp from 'vue3-autocounter'
import 'aos/dist/aos.css'

// Custom Components & Directives
import globalComponent from './plugins/global-components'
import globalDirective from './plugins/global-directive'
import globalMixin from './plugins/global-mixin'

import axios from 'axios'
import VueAxios from 'vue-axios'

// fontawesome

// /* import the fontawesome core */
// import {
//   library
// } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import {
//   FontAwesomeIcon
// } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import {
//   faUserSecret
// } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(faUserSecret)

// createApp(App)
//   .component('font-awesome-icon', FontAwesomeIcon)
//   .mount('#app')


require('waypoints/lib/noframework.waypoints.min')

const app = createApp(App)
app.use(store).use(router)

// Library Components
app.use(VueSweetalert2)
app.use(VueApexCharts)
app.use(BootstrapVue3)

// Make BootstrapVue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)

app.component('counter-up', CounterUp)

// Custom Components & Directives
app.use(globalComponent)
app.use(globalDirective)
app.mixin(globalMixin)

axios.defaults.baseURL = `https://graceful-medley-391916.et.r.appspot.com/api/v1`;

app.mount('#app')

export default app
