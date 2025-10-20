<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Carrito de Compras</h1>

    <div v-if="carrito.length === 0">
      <p>El carrito está vacío.</p>
    </div>

    <div v-else>
      <div v-for="item in carrito" :key="item.id" class="border p-2 mb-2">
        <h2>{{ item.nombre }}</h2>
        <p>Cantidad: {{ item.cantidad }} | Precio: ${{ item.precio * item.cantidad }}</p>
        <button @click="eliminarDelCarrito(item.id)" class="bg-red-500 text-white px-2 py-1">Eliminar</button>
      </div>

      <p class="mt-4 font-bold">Total artículos: {{ totalArticulos }}</p>
      <p class="font-bold">Total precio: ${{ totalPrecio }}</p>

      <button @click="vaciarCarrito" class="bg-gray-500 text-white px-4 py-2 mt-2">Vaciar Carrito</button>
    </div>
  </div>
</template>

<script>
import { useCarritoStore } from '../stores/useCarritoStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const carritoStore = useCarritoStore()
    const { carrito, totalArticulos, totalPrecio } = storeToRefs(carritoStore)

    return { carrito, totalArticulos, totalPrecio, eliminarDelCarrito: carritoStore.eliminarDelCarrito, vaciarCarrito: carritoStore.vaciarCarrito }
  }
}
</script>
