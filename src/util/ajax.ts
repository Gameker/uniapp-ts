import Vue from 'vue';
import * as index from '@/api/index'
import * as girls from '@/api/girls'
import * as center from '@/api/center'

export const ajax = {
    index: {
        getData: index.getData,
    },
    girls: {
        getData: girls.getData,
    },
    center: {
        reset: center.reset
    },

}

function loadProtocol(url: string, root: any) {
    for (const key in root) {
        const item = root[key];
        if (typeof item === 'object') {
            loadProtocol(`${url}/${key}`, item);
        }
        else if (typeof item === 'function') {
            root[key] = async (arg: any, cb: any) => {
                const path = `${url}/${key}`;
                if (!arg && !cb) { return await item(path); }
                else if (arg && cb) { return await item(arg, cb, path); }
                else if (arg) { return await item(arg, path); }
                else { return await item(cb, path); }
            }
        }
    }
}

loadProtocol('/api', ajax);

Vue.prototype.$ajax = ajax;

declare module 'vue/types/vue' {
    interface Vue {
        $ajax: typeof ajax;
    }
}
