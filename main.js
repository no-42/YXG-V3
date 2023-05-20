import uviewPlus from './uni_modules/uview-plus'
// import './static/css/common.scss'
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import './static/css/common.scss'
// Vue.use(uviewPlus)
// Vue.config.unit = 'rpx'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'
import App from './App.vue'

export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}

// #endif