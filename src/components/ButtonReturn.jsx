import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonReturn = () => {
const navigate = useRouter()
const handleClickReturn = () => {
  navigate.push("/")
}

  return (
    <div>
        <Button className="text-white bg-[#966720a4] hover:bg-[#a3793aa4] font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center" variant="shadow" onClick={handleClickReturn} >
            Comprar
        </Button>
    </div>
  )
}

export default ButtonReturn