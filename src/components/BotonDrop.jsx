"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BotonDrop({}) {
  
  const ruta = usePathname();
  const rSelected = ruta == "/pulseras" || ruta == "/collares" || ruta == "/tobilleras" 

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Dropdown onOpenChange={setIsOpen}> 
      <DropdownTrigger>
        <Button
          className={`bg-transparent border-0 text-foreground text-medium ml-[-16.5px] md:ml-0 ${isOpen ? "text-[#f3bb72] font-bold" : "" || rSelected ? "text-[#f3bb72] font-bold" : "" }`}
        >
          Productos
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Productos menu">
          <DropdownItem textValue="Collares">
            <Link href="/collares" passHref className={"/collares" == ruta ?  "text-[#f3bb72] font-bold" : "" }>
             Collares
            </Link>
          </DropdownItem>
          <DropdownItem textValue="Pulseras">
            <Link href="/pulseras" passHref className={"/pulseras" == ruta ?  "text-[#f3bb72] font-bold" : "" }>
             Pulseras
            </Link>
          </DropdownItem>
          <DropdownItem textValue="Tobilleras">
            <Link href="/tobilleras" passHref className={"/tobilleras" == ruta ?  "text-[#f3bb72] font-bold" : "" }>
              Tobilleras
            </Link>
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
