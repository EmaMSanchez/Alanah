"use client"
import { useCartStore } from "@/store/cartStore";
import {Badge} from "@nextui-org/react";
import { useEffect } from "react";


const CartNav = () => {

  useEffect(() => {
          useCartStore.persist.rehydrate();
      }, [])

    const items = useCartStore((state) => state.getProductos())
   
    
    if(items < 1){
        return (
           
            <svg className="w-6 h-6 text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>
        )
    }
  return (
    <Badge color="danger" className="text-white" size="sm" variant="flat" content={items} placement="top-right">
    <svg className="w-6 h-6 text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
    </svg>
    </Badge>
  )
}

export default CartNav