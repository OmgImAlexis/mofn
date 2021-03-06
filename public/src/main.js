import Vue from 'vue';
import VueStash from 'vue-stash';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueSocketio from 'vue-socket.io';
import * as log from 'loglevel';
import App from './App.vue';
import routes from './routes';
import store from './store';

Vue.use(VueStash);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSocketio, '/');

const router = new VueRouter({
    routes,
    mode: 'history'
});

const app = new Vue({
    router: router,
    data: {
        store
    },
    sockets: {
        connect() {
            console.log('socket connected');
        },
        notification(message) {
            console.log(message);
        }
    },
    render: h => h(App)
}).$mount('#app');

window.log = log.noConflict();
window.app = app;
