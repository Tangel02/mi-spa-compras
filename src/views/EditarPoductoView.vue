<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Editar Producto</h1>

    <form v-if="producto" @submit.prevent="actualizarProducto" class="space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Nombre del Producto</label>
        <input v-model="nombre" type="text" class="border p-2 w-full" required />
      </div>

      <div>
        <label class="block mb-1 font-semibold">Precio</label>
        <input v-model.number="precio" type="number" class="border p-2 w-full" required />
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Actualizar Producto</button>
    </form>

    <div v-else>
      <p>Producto no encontrado.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'EditarProductoView',
  setup() {
    const productoStore = useProductoStore()
    const route = useRoute()
    const router = useRouter()

    const producto = ref(null)
    const nombre = ref('')
    const precio = ref(0)

    onMounted(() => {
      const id = parseInt(route.params.id)
      const p = productoStore.obtenerProductoPorId(id)
      if (p) {
        producto.value = p
        nombre.value = p.nombre
        precio.value = p.precio
      }
    })

    const actualizarProducto = () => {
      productoStore.actualizarProducto(producto.value.id, { nombre: nombre.value, precio: precio.value })
      alert('Producto actualizado correctamente!')
      router.push('/productos')
    }

    return { producto, nombre, precio, actualizarProducto }
  }
}
</script>
