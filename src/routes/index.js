import { createWebHistory, createRouter } from "vue-router";
import PublicLayout from "@/layouts/PublicLayout.vue";
import PrivateLayout from "@/layouts/PrivateLayout.vue";
import route from "@/routes/route.js";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegistroUsuarioPage from "@/pages/RegistroUsuarioPage.vue";

//Usuario Interno
import PerfilPage from "@/pages/Usuario/PerfilPage.vue";
import InformacoesPessoaisPage from "@/pages/Usuario/add/InformacoesPessoaisPage.vue";
import EstiloAlimentarPage from "@/pages/Usuario/add/EstiloAlimentarPage.vue";

//Treino Inteligente
import FichasTreinoPage from "@/pages/IA/FichasTreinoPage.vue";
import FichaTreinoPage from "@/pages/IA/FichaTreinoPage.vue";
import CriarFichaTreinoPage from "@/pages/IA/CriarFichaTreinoPage.vue";

//Pacotes FitCoins
import PacotesPage from "@/pages/FitCoins/PacotesPage.vue";
import DetalhesPacote from "@/pages/FitCoins/DetalhesPacote.vue";

const routes = [
  {
    path: "/",
    component: PublicLayout,
    children: [
      { path: "", component: HomePage, name: "home" },
      { path: "/registro", component: RegistroUsuarioPage, name: "registro" },
      { path: "/login", component: LoginPage, name: "login" },
    ],
  },

  {
    path: "/usuario",
    component: PrivateLayout,
    children: [
      {
        path: "perfil",
        component: PerfilPage,
        name: "usuario-perfil",
        meta: { auth: true },
      },
      {
        path: "adicionar/informacoes/pessoais",
        component: InformacoesPessoaisPage,
        name: "adicionar-informacoes-pessoais",
        meta: { auth: true },
      },
      {
        path: "adicionar/estilo/alimentar",
        component: EstiloAlimentarPage,
        name: "adicionar-estilo-alimentacao",
        meta: { auth: true },
      },
    ],
  },

  {
    path: "/ficha-treino",
    component: PrivateLayout,
    children: [
      {
        path: "",
        component: FichasTreinoPage,
        name: "fichas-treino",
        meta: { auth: true },
      },
      {
        path: ":id",
        component: FichaTreinoPage,
        name: 'ficha-treino-dado',
        meta: { auth: true},
      }, 
      {
        path: "criar",
        component: CriarFichaTreinoPage,
        name: "criar-ficha-treino",
        meta: { auth: true },
      },
    ],
  },
  {
    path: "/fit-coins",
    component: PrivateLayout,
    children: [
      {
        path: 'pacotes',
        component: PacotesPage,
        name: 'fit-coins-pacotes',
        meta: { auth: true }
      },
      {
        path: 'pacotes/detalhes/:id',
        component: DetalhesPacote,
        name: 'fit-coins-pacotes-detalhes',
        meta: { auth: true }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(route);

export default router;
