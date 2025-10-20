<template>
  <div>
    <h2>Productos</h2>
    <div v-if="productos.length === 0">No hay productos.</div>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="p in productos" :key="p.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ p.nombre }}</h5>
            <p class="card-text">{{ p.descripcion }}</p>
            <p><strong>$ {{ p.precio }}</strong></p>
            <p v-if="p.stock > 0"><small>Stock: {{ p.stock }}</small></p>
            <p v-else class="text-danger"><small>Agotado</small></p>
            <div class="d-flex gap-2">
              <router-link class="btn btn-sm btn-outline-secondary" :to="`/productos/${p.id}`">Editar</router-link>
              <button class="btn btn-sm btn-danger" @click="eliminar(p.id)">Eliminar</button>
              <button class="btn btn-sm btn-success ms-auto" @click="agregar(p)">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'

const productoStore = useProductoStore()
const carritoStore = useCarritoStore()

const productos = productoStore.productos

function eliminar(id) {
  if (confirm('¿Eliminar producto?')) productoStore.eliminarProducto(id)
}

function agregar(producto) {
  carritoStore.agregarAlCarrito({ id: producto.id, nombre: producto.nombre, precio: producto.precio })
}
</script>
