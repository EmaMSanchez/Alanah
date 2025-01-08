import { create } from "zustand";
import { persist } from "zustand/middleware"
export const useCartStore = create(
    persist((set, get)=>({
        productos: [],
        addProduct: (producto, cantidad) =>
            set((state) => {
              // Busca si el producto ya existe
              if (state.productos.some((p) => p.id === producto.id)) {
                // Si ya existe, actualiza su cantidad
                return {
                  productos: state.productos.map((p) =>
                    p.id === producto.id
                      ? { ...p,  cantidad: p.cantidad + cantidad }
                      : p
                  ),
                };
              } else {
                // Si no existe, lo agrega como un nuevo producto
                console.log(`cantidad en funcion ${cantidad}` )
                return {
                  productos: [...state.productos, { ...producto, cantidad }],
                };
              }
            }),
            
        deleteProduct: (id) =>
            set((state) => ({
              productos: state.productos.filter((producto) => producto.id !== id),
            })),

            deleteAllProduct: () =>
                set(() => ({
                  productos: [],
                })),

        getProductos: () => get().productos.length,

        getPrecio: () => get().productos.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
    }), 
    {
        name: "cart-storage",
        skipHydration: true
    }
  )
);