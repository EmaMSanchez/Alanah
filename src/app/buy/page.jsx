"use client"
import BotonBuy from '@/components/BotonBuy'
import BotonDelete from '@/components/BotonDelete'
import ButtonReturn from '@/components/ButtonReturn'
import SpinerMain from '@/components/SpinerMain'
import { useLoader } from '@/context/loader'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import { useEffect } from 'react'

const Buy = () => {

    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, [])

     const loader = useLoader((state) => state.loader)
     const productos = useCartStore((state) => state.productos)
     const precio = useCartStore((state) => state.getPrecio())
     const items = useCartStore((state) => state.getProductos())
     const setLoader = useLoader((state) => state.setLoader)
     
     if (loader){
        setLoader(false)
        return(
            <div className='text-center p-10'>
                <SpinerMain/>
            </div>
        )
     }

     if (!items){
        return(
            <div className='text-center p-10 row-span-1'>
               <h1 className='mb-4'>Agrega algun Item al Carrito</h1>
               <ButtonReturn/>
            </div>
        )
     }
  return (
    <div className='container mt-9'>
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-2 md:px-6 py-3">
                    Imagen
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                    Nombre del Producto
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                    Cantidad
                </th>
                <th scope="col" className="px-2 md:px-6 py-3">
                    Precio
                </th>
                <th scope="col" className="px-0 md:px-6 py-3">
                
                </th>
            </tr>
        </thead>
        <tbody>
            {
                productos.map((producto)=> (
                    <tr className="bg-white border-b" key={producto.id}>
                    <td className="px-2 md:px-6 py-4">
                        <Image src={producto.imagen} width={70} height={70} alt='imagen' className='aspect-square'/>
                    </td>
                    <th scope="row" className="px-2 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="px-[33px] md:px-12 py-4">
                       
                        {producto.cantidad}
                       
                    </td>
                    <td className="px-2 md:px-6 py-4">
                        ${producto.precio * producto.cantidad}
                    </td>
                    <th scope="col" className="px-0 md:px-6 py-3">
                        <BotonDelete id={producto.id}/>
                    </th>
                </tr>
                ))
            }
           
        </tbody>
    </table>
</div>
<div className='container flex justify-between items-center p-5'>
 <BotonBuy/>
 <h3 className='text-[#966720a4] font-semibold '>Total: ${precio}</h3>
</div>
</div>
  )
}

export default Buy