"use client"

import { useToast } from "@/hooks/use-toast"
import { useCartStore } from "@/store/cartStore"
import { Button } from "@nextui-org/react"

const ButtonAddProduct = ({datos, cantidad, resetCantidad, disabled}) => {
 
 const addToCart = useCartStore((state) => state.addProduct)
 const { toast } = useToast()

 const handleClickAddToCart = () => {
  addToCart(datos, cantidad);
  toast({
    description: "Producto agregado al Carrito",
  })
  resetCantidad(1);
 }
  return (
    
    <Button disabled={disabled} className="text-white bg-[#966720a4] hover:bg-[#a3793aa4] font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center " variant="shadow" onClick={handleClickAddToCart}>
        Add to cart
    </Button>
  )
}

export default ButtonAddProduct