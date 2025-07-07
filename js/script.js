
// Lista de productos 
let productos = [
  { nombre: 'Paquete Standard ', precio: 10, descuento: true },
  { nombre: 'Paquete Mega Standard ', precio: 20, descuento: false },
  { nombre: 'Paquete Arcana ', precio: 10, descuento: true },
  { nombre: 'Paquete Mega Arcana ', precio: 20, descuento: false },
  { nombre: 'Paquete Celestial ', precio: 10, descuento: true },
  { nombre: 'Paquete Mega Celestial ', precio: 20.00, descuento: false },
  { nombre: 'Paquete Buffoon ', precio: 50.00, descuento: false },
  { nombre: 'Paquete Special ', precio: 70.00, descuento: true },
  { nombre: 'Paquete Mega Special ', precio: 110.00, descuento: true }
];

// Contadores para saber cuantos tienen descuento

let conDescuento = 0;
let sinDescuento = 0;

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];

    // Usando el operador && (y) con descuento activo

    if (producto.descuento === true) {
        console.log(`${producto.nombre}: $${producto.precio} (en descuento.)`);
    }

    // Usando el operador ! (NOT) si NO tiene descuento

    if (!producto.descuento) { // Equivale a producto.descuento === false.

        console.log(`${producto.nombre}: $${producto.precio} (no está en promoción.)`);
    }
}

// Mostrar cuantos productos tienen descuento y cuantos no

for (let producto of productos) {
    if (producto.descuento) {
        conDescuento++;
     } else {
            sinDescuento++;
        }
    }

console.log("Con descuento", conDescuento);
console.log("Sin descuento", sinDescuento);
