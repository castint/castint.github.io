import { createApp, h } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from '@/components/App.vue';
import Contact from '@/components/Contact.vue';
import Home from '@/components/Home.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/about',
            component: {
                template: '<p>About</p>'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/home'
        }
    ]
});

app.use(router);
app.mount('#app');
