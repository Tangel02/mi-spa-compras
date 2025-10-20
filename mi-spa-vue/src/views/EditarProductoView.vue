<template>
  <div v-if="producto">
    <h2>Editar producto</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-2">
        <label>Nombre</label>
        <input v-model="form.nombre" class="form-control" required />
      </div>
      <div class="mb-2">
        <label>Descripcion</label>
        <input v-model="form.descripcion" class="form-control" />
      </div>
      <div class="mb-2">
        <label>Precio</label>
        <input v-model.number="form.precio" type="number" class="form-control" required />
      </div>
      <div class="mb-2">
        <label>Stock</label>
        <input v-model.number="form.stock" type="number" class="form-control" />
      </div>
      <button class="btn btn-success">Guardar cambios</button>
    </form>
  </div>
  <div v-else>
    <p>Producto no encontrado.</p>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRouter, useRoute } from 'vue-router'

const productoStore = useProductoStore()
const router = useRouter()
const route = useRoute()

const id = route.params.id
const producto = productoStore.obtenerProductoPorId(id)

const form = reactive(producto ? { ...producto } : { nombre: '', descripcion: '', precio: 0, stock: 0 })

function onSubmit() {
  productoStore.actualizarProducto(id, { nombre: form.nombre, descripcion: form.descripcion, precio: form.precio, stock: form.stock })
  router.push('/productos')
}
</script>
