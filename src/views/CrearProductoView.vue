<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Crear Producto</h1>

    <form @submit.prevent="guardarProducto" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Nombre del Producto</label>
        <input v-model="nombre" type="text" class="border p-2 w-full" required />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Precio</label>
        <input v-model.number="precio" type="number" class="border p-2 w-full" required />
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar Producto</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'

export default {
  name: 'CrearProductoView',
  setup() {
    const productoStore = useProductoStore()
    const nombre = ref('')
    const precio = ref(0)

    const guardarProducto = () => {
      productoStore.crearProducto({ nombre: nombre.value, precio: precio.value })
      nombre.value = ''
      precio.value = 0
      alert('Producto creado correctamente!')
    }

    return { nombre, precio, guardarProducto }
  }
}
</script>
