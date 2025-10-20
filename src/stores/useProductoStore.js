import { defineStore } from 'pinia'

export const useProductoStore = defineStore('producto', {
  state: () => ({
    productos: [
      { id: 1, nombre: 'Laptop', precio: 25000 },
      { id: 2, nombre: 'Mouse', precio: 600 },
      { id: 3, nombre: 'Teclado', precio: 1500 },
      { id: 4, nombre: 'Monitor', precio: 4500 },
      { id: 5, nombre: 'Audífonos', precio: 800 },
    ]
  }),
  actions: {
    crearProducto(producto) {
      producto.id = Date.now()
      this.productos.push(producto)
    },
    actualizarProducto(id, productoActualizado) {
      const index = this.productos.findIndex(p => p.id === id)
      if (index !== -1) this.productos[index] = { ...this.productos[index], ...productoActualizado }
    },
    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id)
    }
  },
  getters: {
    obtenerProductoPorId: (state) => (id) => state.productos.find(p => p.id === id)
  }
})
