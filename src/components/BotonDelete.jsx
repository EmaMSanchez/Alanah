import React from 'react'
import IconDelete from './iconDelete'
import { useCartStore } from '@/store/cartStore'
import Swal from 'sweetalert2'

const BotonDelete = ({id}) => {

   const deleteProducto = useCartStore((state) => state.deleteProduct)
   const handleDelete = () => {
    Swal.fire({
      title: 'Quieres eliminar?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Eliminar',
      iconColor: '#966720a4',
      customClass: {
        popup: 'bg-white rounded-lg shadow-xl border-4 ', // Fondo del popup
        title: 'text-xl font-bold text-[#966720a4]', // Estilo del título
        htmlContainer: 'text-sm text-[#966720a4]', // Estilo del texto
        confirmButton: 'bg-[#966720a4] hover:bg-[#a3793aa4]   text-white font-bold py-2 px-4 rounded', // Botón de confirmación
        cancelButton: 'bg-[#966720a4] hover:bg-[#a3793aa4] text-white font-bold py-2 px-4 rounded', // Botón de cancelación
        
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          iconColor: '#966720a4',
          title: "Eliminado",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'bg-white rounded-lg shadow-xl border-4 ', // Fondo del popup
            title: 'text-xl font-bold text-[#966720a4]', // Estilo del título
            htmlContainer: 'text-sm text-[#966720a4]'
          }
        });
        deleteProducto(id)
      }
      return
    })
    
   }
  return (
    <button className="appearance-none border-none bg-transparent p-0 m-0 focus:outline-none" onClick={handleDelete}><IconDelete/></button>
  )
}

export default BotonDelete