import {createWebHistory, createRouter} from 'vue-router';
import PublicLayout from '@/layouts/PublicLayout.vue';
import PrivateLayout from '@/layouts/PrivateLayout.vue';
import route from '@/routes/route.js';
import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegistroUsuarioPage from '@/pages/RegistroUsuarioPage.vue';

//Usuario Interno
import PerfilPage from '@/pages/Usuario/PerfilPage.vue';
import InformacoesPessoaisPage from '@/pages/Usuario/add/InformacoesPessoaisPage.vue';
import EstiloAlimentarPage from '@/pages/Usuario/add/EstiloAlimentarPage.vue';

const routes = [
    {
      path: '/',
      component: PublicLayout,
      children: [
        {path: '', component: HomePage, name: 'home'},
        {path: '/registro', component: RegistroUsuarioPage, name:'registro'},
        {path: '/login', component: LoginPage, name: 'login'},
      ]
    },

    {
        path: '/usuario',
        component: PrivateLayout,
        children: [
            {path: 'perfil', component: PerfilPage, name: 'usuario-perfil', meta: {auth: true}},
            {path: 'adicionar/informacoes/pessoais', component: InformacoesPessoaisPage, name:'adicionar-informacoes-pessoais', meta: {auth: true}},
            {path: 'adicionar/estilo/alimentar', component: EstiloAlimentarPage, name:'adicionar-estilo-alimentacao', meta: {auth: true} }
        ]
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(route);

export default router;