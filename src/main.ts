import Vue from 'vue'
import App from './App.vue'
import '@/util/ajax'

import uView from "uview-ui";
Vue.use(uView);

import { myRequest } from './util/http'
Vue.prototype.$http = myRequest

// 让 vue 识别全局方法/变量
declare module 'vue/types/vue' {
    interface Vue {
        $http: typeof myRequest;
    }
    interface Vue {
        $u: typeof uView;
    }
}
Vue.config.productionTip = false

new App().$mount()
