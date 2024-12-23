export function crearMensajeWhatsApp(productos, precioTotal) {
    let mensaje = "¡Hola quiero comprar los siguientes productos!\n";
    productos.forEach(producto => {
      mensaje += `* ${producto.nombre} - ${producto.cantidad} unidades a $${producto.precio} c/u *\n`;
    });
    mensaje += `Total a Pagar: $${precioTotal}`
    return mensaje;
  }