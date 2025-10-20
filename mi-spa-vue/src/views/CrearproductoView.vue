<template>
  <div>
    <h2>Crear producto</h2>
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
      <button class="btn btn-primary">Crear</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRouter } from 'vue-router'

const productoStore = useProductoStore()
const router = useRouter()

const form = reactive({ nombre: '', descripcion: '', precio: 0, stock: 0 })

function onSubmit() {
  productoStore.crearProducto({ ...form })
  router.push('/productos')
}
</script>
