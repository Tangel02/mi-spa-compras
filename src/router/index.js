import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import CrearProductoView from '../views/CrearProductoView.vue'
import EditarProductoView from '../views/EditarProductoView.vue'
import CarritoView from '../views/CarritoView.vue'

const routes = [
  { path: '/', component: InicioView },
  { path: '/productos', component: ProductosView },
  { path: '/productos/crear', component: CrearProductoView },
  { path: '/productos/:id', component: EditarProductoView },
  { path: '/carrito', component: CarritoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
