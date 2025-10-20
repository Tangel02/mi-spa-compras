import { defineStore } from 'pinia'

export const useProductoStore = defineStore('producto', {
  state: () => ({
    productos: [
      { id: 1, nombre: 'Laptop Gamer', precio: 25000, descripcion: 'Laptop de alto rendimiento' },
      { id: 2, nombre: 'Mouse inalámbrico', precio: 600, descripcion: 'Mouse ergonómico Bluetooth' },
      { id: 3, nombre: 'Teclado mecánico', precio: 1500, descripcion: 'Teclado retroiluminado RGB' },
      { id: 4, nombre: 'Monitor 27"', precio: 4500, descripcion: 'Monitor Full HD' },
      { id: 5, nombre: 'Audífonos', precio: 800, descripcion: 'Sonido envolvente y micrófono' }
    ]
  }),
  actions: {
    crearProducto(producto) {
      producto.id = Date.now()
      this.productos.push(producto)
    },
    actualizarProducto(id, productoActualizado) {
      const index = this.productos.findIndex(p => p.id === id)
      if (index !== -1) {
        this.productos[index] = { ...this.productos[index], ...productoActualizado }
      }
    },
    eliminarProducto(id) {
      this.productos = this.productos.filter(p => p.id !== id)
    }
  },
  getters: {
    obtenerProductoPorId: (state) => (id) => {
      return state.productos.find(p => p.id === id)
    }
  }
})
