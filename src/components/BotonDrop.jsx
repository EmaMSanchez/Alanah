"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BotonDrop({}) {
  
  const ruta = usePathname();
  const rSelected = ruta == "/pulseras" || ruta == "/collares" || ruta == "/tobilleras" 

  const [isOpen, setIsOpen] = useState(false);

  
  const handleRedirect = (ruta) =>{
    window.location.href = ruta
  }

  return (
    <Dropdown onOpenChange={setIsOpen}> 
      <DropdownTrigger>
        <Button
          className={`bg-transparent border-0 text-foreground text-medium ml-[-16.5px] md:ml-0 ${isOpen ? "text-[#f3bb72] font-bold mr-[-7.2px]" : "" || rSelected ? "text-[#f3bb72] font-bold mr-[-7.2px]" : "" }`}
        >
          Productos
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Productos menu">
          <DropdownItem textValue="Collares" className={"/collares" == ruta ?  "text-[#f3bb72] font-bold" : "" } onClick={() => handleRedirect("/collares")}>
             Collares
          </DropdownItem>
          <DropdownItem textValue="Pulseras" className={"/pulseras" == ruta ?  "text-[#f3bb72] font-bold" : "" } onClick={() => handleRedirect("/pulseras")}>
             Pulseras
          </DropdownItem>
          <DropdownItem textValue="Tobilleras" className={"/tobilleras" == ruta ?  "text-[#f3bb72] font-bold" : "" } onClick={() => handleRedirect("/tobilleras")}>
              Tobilleras
          </DropdownItem>
          <DropdownItem textValue="Combos" className={"/combos" == ruta ?  "text-[#f3bb72] font-bold" : "" } onClick={() => handleRedirect("/combos")}>
              Combos
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
