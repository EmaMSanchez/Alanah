"use client"
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BotonDrop from "./BotonDrop";
import CartNav from "./CartNav";



export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ruta = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent className="hidden sm:flex gap-4 " justify="start" >
        <NavbarItem>
          <Link  className={ruta === '/' ? 'text-[#f3bb72] font-bold' : 'text-foreground'} 
              href="/"
             >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
            <BotonDrop/>
        </NavbarItem>
        <NavbarItem>
        <Link  className={ruta === '/contacto' ? 'text-[#f3bb72] font-bold' : 'text-foreground'} 
              href="/contacto"
            >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      </NavbarContent>

      
      <NavbarBrand className="justify-center">
      <Image
  src="/logoNav.png"
  width={240}
  height={240}
  alt="Foto alanah"
  priority
  sizes="(max-width: 768px) 450px, 470px"
/>
        </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-[#966720a4] text-white" href="/buy" variant="shadow" >
          <CartNav/>
          </Button>
        </NavbarItem>
       
      </NavbarContent>
      <NavbarMenu>
      <NavbarMenuItem>
          <Link  className={ruta === '/' ? 'text-[#f3bb72] font-bold' : 'text-foreground'} 
              href="/"
            >
            Home
          </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <BotonDrop/>
          </NavbarMenuItem>
          <NavbarMenuItem>
          <Link  className={ruta === '/contacto' ? 'text-[#f3bb72] font-bold' : 'text-foreground'} 
              href="/contacto"
            >
            Contacto
          </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
