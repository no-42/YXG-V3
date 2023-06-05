import uviewPlus from './uni_modules/uview-plus'
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import './static/css/common.scss'
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
import TopText from './pages/component/top-text/top-text'

export function createApp() {
	const app = createSSRApp(App)
	app.component('TopText', TopText)
	return {
		app
	}
}

// #endif