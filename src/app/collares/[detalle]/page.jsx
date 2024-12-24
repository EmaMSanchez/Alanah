"use client"
import ButtonAddProduct from "@/components/ButtonAddProduct";
import { DATOCOLLARES } from "@/mock/datoProducts";
import {Image} from "@nextui-org/react";
import { usePathname, redirect } from "next/navigation";
import { useState } from "react";


const DetalleCollar = () => {
    const pathname = usePathname()
    const id = pathname.split("/").pop(); //Extrae ultima parte del path
    if (!id)
    {
        redirect("/")
       
    }
    const datos = DATOCOLLARES.productos.find(data => data.id === id)
    const [cantidad, setCantidad] = useState(1);
    return (
        <div className="container grid grid-cols-2 gap-2  pt-8 md:gap-5 md:pt-0 md:m-8  md:w-full " >
        <div className="container flex items-center justify-center ml-3 ml:m-0 md:m-8  ">
         <Image
          isZoomed
          width={400}
          alt="NextUI Fruit Image with Zoom"
          src={datos.imagen}
        />
        </div>
       
        <div className="container flex items-center justify-center mr-1 md:mr-0 ">
        <div className="w-[85%] h-[86%] md:w-[100%] md:h-[87.5%] md:max-w-xs bg-white border border-gray-200 rounded-lg shadow">
        <img className="w-[82%] ml-5 mt-[-20px] md:mt-0 md:ml-0 md:w-80 md:p-6 rounded-t-lg" src="/logoNav.png" alt="product image" />
    <div className="px-5 md:pb-5 md:mt-[-40px]">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 mt-[-40px] md:mt-0">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
           <input  type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-16 mt-2 mb-10 md:my-4  text-center border rounded-md"/>
        <div className="flex gap-2  items-center relative ml-[-13px] md:ml-0 md:gap-0 md:justify-between md:my-2 ">
            <span className="text-xl md:text-2xl font-bold text-gray-900 ">${datos.precio}</span>
          <ButtonAddProduct disabled={cantidad < 1} datos={datos} cantidad={cantidad} resetCantidad={() => setCantidad(1)}/>
        </div>
    </div>
</div>
        </div>
        </div>
      );
    }

export default DetalleCollar


