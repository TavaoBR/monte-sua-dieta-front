import {createWebHistory, createRouter} from 'vue-router';
import route from '@/routes/route.js';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routes = [
    {path: '/', component: HomePage, name: 'home'},
    {path: '/login', component: LoginPage, name: 'login'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(route);

export default router;