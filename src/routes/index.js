import {createWebHistory, createRouter} from 'vue-router';
import PublicLayout from '@/layouts/PublicLayout.vue';
import PrivateLayout from '@/layouts/PrivateLayout.vue';
import route from '@/routes/route.js';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import PerfilPage from '@/pages/Usuario/PerfilPage.vue';

const routes = [
    {
      path: '/',
      component: PublicLayout,
      children: [
        {path: '', component: HomePage, name: 'home'},
        {path: '/login', component: LoginPage, name: 'login'},
      ]
    },

    {
        path: '/usuario',
        component: PrivateLayout,
        children: [
            {path: 'perfil', component: PerfilPage, name: 'usuario-perfil', meta: {auth: true}},
        ]
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(route);

export default router;