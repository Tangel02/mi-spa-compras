<template>
  <div>
    <h2>Carrito</h2>
    <div v-if="carrito.length === 0">
      <p>El carrito está vacío.</p>
      <router-link to="/productos" class="btn btn-primary">Ir a productos</router-link>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th><th></th></tr>
        </thead>
        <tbody>
          <tr v-for="item in carrito" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.cantidad }}</td>
            <td>$ {{ item.precio }}</td>
            <td>$ {{ (item.precio * item.cantidad).toFixed(2) }}</td>
            <td><button class="btn btn-sm btn-danger" @click="eliminar(item.id)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between">
        <div>
          <strong>Total artículos:</strong> {{ totalArticulos }}
        </div>
        <div>
          <strong>Total precio:</strong> $ {{ totalPrecio.toFixed(2) }}
          <button class="btn btn-outline-danger ms-3" @click="vaciar">Vaciar carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCarritoStore } from '../stores/useCarritoStore'
const store = useCarritoStore()
const carrito = store.carrito
const totalArticulos = store.totalArticulos
const totalPrecio = store.totalPrecio

function eliminar(id) { store.eliminarDelCarrito(id) }
function vaciar() { if (confirm('Vaciar carrito?')) store.vaciarCarrito() }
</script>
