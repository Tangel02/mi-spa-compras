import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import CrearProductoView from '../views/CrearProductoView.vue'
import EditarProductoView from '../views/EditarProductoView.vue'
import CarritoView from '../views/CarritoView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/productos', name: 'productos', component: ProductosView },
  { path: '/productos/crear', name: 'crearProducto', component: CrearProductoView },
  { path: '/productos/:id', name: 'editarProducto', component: EditarProductoView, props: true },
  { path: '/carrito', name: 'carrito', component: CarritoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
