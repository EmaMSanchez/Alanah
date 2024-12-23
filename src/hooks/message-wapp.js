import { crearMensajeWhatsApp } from "./menssage-format";
import Swal from "sweetalert2";


export function redirigirAWhatsApp(productos, precioTotal) {
    const mensaje = crearMensajeWhatsApp(productos, precioTotal);
    const numeroTelefono = process.env.NEXT_PUBLIC_WAPNUMBER 
     try {
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = urlWhatsApp;
  } catch (error) {
    console.error('Error al redirigir a WhatsApp:', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.',
    });
  }
  }