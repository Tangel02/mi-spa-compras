<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">SPA Productos</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><router-link class="nav-link" to="/productos">Productos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/productos/crear">Crear Producto</router-link></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/carrito">
              Carrito <span class="badge bg-primary ms-2">{{ totalArticulos }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useCarritoStore } from '../stores/useCarritoStore'
const carritoStore = useCarritoStore()
const totalArticulos = computed(() => carritoStore.totalArticulos)
</script>
