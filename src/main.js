import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'
import Buefy from 'buefy'
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

Vue.config.productionTip = false
library.add(faHeart)

Vue.component('vue-fontawesome', FontAwesomeIcon)
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'far'
})
Vue.use(VueScrollProgressBar)
Vue.use(VueAnalytics, { id: 'G-1NQS6T1JX7' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
