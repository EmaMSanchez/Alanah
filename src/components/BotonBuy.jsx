import { redirigirAWhatsApp } from '@/hooks/message-wapp'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@nextui-org/react'
import React from 'react'
import Swal from 'sweetalert2'


const BotonBuy = () => {

 const productos = useCartStore((state) => state.productos)
 const precioTotal = useCartStore((state) => state.getPrecio())
 const reiniciarLocal = useCartStore((state) => state. deleteAllProduct) 
 const handleBuy = () => {
   Swal.fire({
             position: "center",
             icon: "success",
             iconColor: '#966720a4',
             title: "¡Gracias por su compra!",
             showConfirmButton: false,
             timer: 1500,
             customClass: {
               popup: 'bg-white rounded-lg shadow-xl border-4 ', // Fondo del popup
               title: 'text-xl font-bold text-[#966720a4]', // Estilo del título
               htmlContainer: 'text-sm text-[#966720a4]'
             }
           });
          
           redirigirAWhatsApp(productos, precioTotal)
           reiniciarLocal();
        }

  return (
    <Button className="text-white bg-[#966720a4] hover:bg-[#a3793aa4] font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center " variant="shadow" onClick={handleBuy}>
        Finalizar Compra
    </Button>
  )
}

export default BotonBuy


