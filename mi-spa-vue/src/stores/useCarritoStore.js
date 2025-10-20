import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    carrito: []
  }),
  actions: {
    agregarAlCarrito(producto) {
      const existe = this.carrito.find(p => p.id === producto.id)
      if (existe) {
        existe.cantidad++
      } else {
        this.carrito.push({ ...producto, cantidad: 1 })
      }
    },
    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter(p => p.id !== id)
    },
    vaciarCarrito() {
      this.carrito = []
    }
  },
  getters: {
    totalArticulos: (state) => {
      return state.carrito.reduce((acc, item) => acc + item.cantidad, 0)
    },
    totalPrecio: (state) => {
      return state.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }
  }
})
