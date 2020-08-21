import Vue from 'vue'

import App from './App.vue'

import router from './router'
import store from './store/index'
import { eellyAjax, axios } from './eellyAjax'
import './antDesign'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$eellyAjax = eellyAjax
Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
