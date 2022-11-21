import { createRouter, createWebHistory } from "vue-router";
import CubosMarca from "./components/CubosMarca.vue";
import CubosDetalle from "./components/CubosDetalle.vue";
import LoginComponent from "./components/LoginComponent.vue";


import RegistroComponent from "./components/RegistroComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import RealizarCompra from "./components/RealizarCompra.vue";
import HomeComponent from "./components/HomeComponent.vue";
const routes = [
 
    {
        path: '/cubosmarca', component: CubosMarca
      },

      {
        path: '/cubosmarca/:marca', component: CubosMarca
      },
    
      {
        path: '/cubosdetalle/:idcubo', component: CubosDetalle
      },
    
      {
        path: '/login', component: LoginComponent
      },
    
      {
        path: '/registro', component: RegistroComponent
      },
    
      {
        path: '/perfil', component: PerfilComponent
      },
      {
        path: '/compras', component: ComprasComponent
      },
      {
        path: '/realizarcompra', component: RealizarCompra
      },
      {
        path: '/', component: HomeComponent
      }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;