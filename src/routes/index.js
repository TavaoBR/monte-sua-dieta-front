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
import PerfilNutricionalPage from "@/pages/Usuario/add/PerfilNutricionalPage.vue";

//Treino Inteligente
import IndexPage from "@/pages/IA/TreinoInteligente/IndexPage.vue";
import GerarExercicioPage from "@/pages/IA/TreinoInteligente/Exercicios/GerarExercicioPage.vue";
import ListarMusculosPage from "@/pages/IA/TreinoInteligente/Exercicios/ListarMusculosPage.vue";
import VisualizarExerciciosPage from "@/pages/IA/TreinoInteligente/Exercicios/VisualizarExerciciosPage.vue";
import GerarFichaPage from "@/pages/IA/TreinoInteligente/Fichas/GerarFichaPage.vue";
import ListarFichasPage from "@/pages/IA/TreinoInteligente/Fichas/ListarFichasPage.vue";
import ListarExerciciosPage from "@/pages/IA/TreinoInteligente/Fichas/ListarExerciciosPage.vue";

//Nutrição Inteligente
import IndexPageNT from "@/pages/IA/NutricaoInteligente/IndexPage.vue";
import PlanoAlimentarPage from "@/pages/IA/NutricaoInteligente/PlanoAlimentarPage.vue";
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
        path: "adicionar/perfil-nutricional",
        component: PerfilNutricionalPage,
        name: "adicionar-perfil-nutricional",
        meta: { auth: true },
      },
    ],
  },

  {
    path: "/treino-inteligente",
    component: PrivateLayout,
    children: [
      {
        path: "",
        component: IndexPage,
        name: "treino-inteligente",
        meta: { auth: true },
      },
      {
        path: "listar-musculos-escolhidos",
        component: ListarMusculosPage,
        name: "listar-musculos-escolhidos",
        meta: { auth: true },
      },
      {
        path: "gerar-exercicios",
        component: GerarExercicioPage,
        name: "gerar-exercicios",
        meta: { auth: true },
      },
      {
        path: "listar-exercicios/:id",
        component: VisualizarExerciciosPage,
        name: "listar-exercicios",
        meta: { auth: true },
      },
      {
        path: "fichas-treino",
        component: ListarFichasPage,
        name: "fichas-treino",
        meta: { auth: true },
      },
      {
        path: "fichas-treino/:token",
        component: ListarExerciciosPage,
        name: "ficha-treino-exercicios",
        meta: { auth: true },
      },
      {
        path: "fichas-treino/gerar",
        component: GerarFichaPage,
        name: "gerar-ficha-treino",
        meta: { auth: true },
      },
    ],
  },
  {
    path: "/nutricao-inteligente",
    component: PrivateLayout,
    children: [
      {
        path: "",
        component: IndexPageNT,
        name: "nutricao-inteligente",
        meta: { auth: true },
      },
      {
        path: "plano-alimentar",
        component: PlanoAlimentarPage,
        name: "plano-alimentar",
        meta: { auth: true },
      },
    ],
  },
  {
    path: "/fit-coins",
    component: PrivateLayout,
    children: [
      {
        path: "pacotes",
        component: PacotesPage,
        name: "fit-coins-pacotes",
        meta: { auth: true },
      },
      {
        path: "pacotes/detalhes/:id",
        component: DetalhesPacote,
        name: "fit-coins-pacotes-detalhes",
        meta: { auth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(route);

export default router;
