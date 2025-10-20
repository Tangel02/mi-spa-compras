<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Productos</h1>
    <router-link to="/productos/crear" class="text-blue-500 underline mb-4 inline-block">Crear Producto</router-link>

    <div v-for="producto in productos" :key="producto.id" class="border p-2 mb-2">
      <h2>{{ producto.nombre }}</h2>
      <p>Precio: ${{ producto.precio }}</p>
      <button @click="agregarAlCarrito(producto)" class="bg-green-500 text-white px-2 py-1 mr-2">Agregar al carrito</button>
      <router-link :to="`/productos/${producto.id}`" class="text-blue-500 underline mr-2">Editar</router-link>
      <button @click="eliminarProducto(producto.id)" class="bg-red-500 text-white px-2 py-1">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const productoStore = useProductoStore()
    const carritoStore = useCarritoStore()
    const { productos } = storeToRefs(productoStore)

    const agregarAlCarrito = (producto) => {
      carritoStore.agregarAlCarrito(producto)
    }

    const eliminarProducto = (id) => {
      productoStore.eliminarProducto(id)
    }

    return { productos, agregarAlCarrito, eliminarProducto }
  }
}
</script>
