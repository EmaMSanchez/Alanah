import React from 'react'
import Cardui from './Cardui'
import Link from 'next/link';


const BodyCardsInit = ({info}) => {

    const datos = info;

  return (
    <div className="container grid grid-cols-2 gap-5 md:gap-16">
      
      {
   
           datos.map((dato, index) =>(
            <Link href={`${dato.url}/${dato.id}`} key={index}>
           <Cardui dato={dato} /> 
           </Link>
           ))
      }
      </div>
  )
}

export default BodyCardsInit