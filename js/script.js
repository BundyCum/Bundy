
// Lista de productos 
let productos = [
  { nombre: 'Paquete Standard ', precio: 10, descuento: true },
  { nombre: 'Paquete Mega Standard ', precio: 20, descuento: false },
  { nombre: 'Paquete Arcana ', precio: 10, descuento: true },
  { nombre: 'Paquete Mega Arcana ', precio: 20, descuento: false },
  { nombre: 'Paquete Celestial ', precio: 10, descuento: true },
  { nombre: 'Paquete Mega Celestial ', precio: 20, descuento: false },
  { nombre: 'Paquete Buffoon ', precio: 50, descuento: false },
  { nombre: 'Paquete Special ', precio: 70, descuento: true },
  { nombre: 'Paquete Mega Special ', precio: 110, descuento: true }
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

// Abrir pestaña lateral

function abrirCarrito() {
    document.getElementById("fondolateral").style.display = "block";
}

function cerrarCarrito() {
    document.getElementById("fondolateral").style.display = "none";
}

// Mostrar productos
// Agregar numeros al contador

            function actualizarContadorCarrito() {
             const paquetes = [
        "Paquete Standard",
        "Paquete Mega Standard",
        "Paquete Arcana",
        "Paquete Mega Arcana",
        "Paquete Celestial",
        "Paquete Mega Celestial",
        "Paquete Buffoon",
        "Paquete Special",
        "Paquete Mega Special"
    ];

    let total = 0;

    paquetes.forEach(nombre => {
        const carrito = JSON.parse(localStorage.getItem(nombre)) || [];
        total += carrito.length;
    });

    document.getElementById("contador").textContent = total;

};

// Agregar al LocalStorage

            const botonAgregar = document.getElementById('agregar');
            botonAgregar.addEventListener("click", function() {
                 let producto = productos[0];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Standard")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Standard", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar1 = document.getElementById('agregar1');
            botonAgregar1.addEventListener("click", function() {
                 let producto = productos[1];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Mega Standard")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Mega Standard", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar2 = document.getElementById('agregar2');
            botonAgregar2.addEventListener("click", function() {
                 let producto = productos[2];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Arcana")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Arcana", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar3 = document.getElementById('agregar3');
            botonAgregar3.addEventListener("click", function() {
                 let producto = productos[3];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Mega Arcana")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Mega Arcana", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar4 = document.getElementById('agregar4');
            botonAgregar4.addEventListener("click", function() {
                 let producto = productos[4];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Celestial")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Celestial", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar5 = document.getElementById('agregar5');
            botonAgregar5.addEventListener("click", function() {
                 let producto = productos[5];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Mega Celestial")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Mega Celestial", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar6 = document.getElementById('agregar6');
            botonAgregar6.addEventListener("click", function() {
                 let producto = productos[6];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Buffoon")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Buffoon", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar7 = document.getElementById('agregar7');
            botonAgregar7.addEventListener("click", function() {
                 let producto = productos[7];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Special")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Special", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });
            const botonAgregar8 = document.getElementById('agregar8');
            botonAgregar8.addEventListener("click", function() {
                 let producto = productos[8];
                 let carrito = JSON.parse(localStorage.getItem("Paquete Mega Special")) || [];
                 carrito.push(producto);
                 localStorage.setItem("Paquete Mega Special", JSON.stringify(carrito));
                 actualizarContadorCarrito();
                 document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });

            // Borrar contadores y LocalStorage

            const botonVaciar = document.getElementById('vaciar');
            botonVaciar.addEventListener("click", function() {
                localStorage.clear();
                actualizarContadorCarrito();
                document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
            });

            let cantidad = 0;
            function agregaralcarrito() {
                cantidad++;
                document.getElementById("contador").textContent = cantidad;
            };
            

            document.addEventListener("DOMContentLoaded", () => {
                actualizarContadorCarrito();
            });

        function calcularTotalCarrito() {
    const paquetes = [
        "Paquete Standard",
        "Paquete Mega Standard",
        "Paquete Arcana",
        "Paquete Mega Arcana",
        "Paquete Celestial",
        "Paquete Mega Celestial",
        "Paquete Buffoon",
        "Paquete Special",
        "Paquete Mega Special"
    ];

    let total = 0;

    paquetes.forEach(nombre => {
        const carrito = JSON.parse(localStorage.getItem(nombre)) || [];
        carrito.forEach(producto => {
            total += producto.precio;
        });
    });

    return total;
}

document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);

// Carrito abierto con precios y unidades


function abrirCarrito() {
    document.getElementById("fondolateral").style.display = "block";
    mostrarContadoresCarrito(); 
    document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
}

function mostrarContadoresCarrito() {
    const paquetes = [
        "Paquete Standard",
        "Paquete Mega Standard",
        "Paquete Arcana",
        "Paquete Mega Arcana",
        "Paquete Celestial",
        "Paquete Mega Celestial",
        "Paquete Buffoon",
        "Paquete Special",
        "Paquete Mega Special"
    ];

    let contenedor = document.getElementById("contenedor-contadores");
    contenedor.innerHTML = "";

    paquetes.forEach(nombre => {
        const carrito = JSON.parse(localStorage.getItem(nombre)) || [];
        const cantidad = carrito.length;

        if (cantidad > 0) {
            const producto = carrito[0];
            let precioUnitario = producto.precio;
           
            let totalProducto = precioUnitario * cantidad;

            // línea de texto: "2 x Paquete Special : $140"

            const linea = document.createElement("p");
            linea.textContent = `${cantidad} x ${nombre} : $${totalProducto.toFixed(2)}`;

            contenedor.appendChild(linea);
        }
    });

    // Actualizar total general

    document.getElementById("total-carrito").textContent = "$" + calcularTotalCarrito().toFixed(2);
    actualizarContadorCarrito();
}

// Boton para pagar 

document.getElementById("boton-pagar").addEventListener("click", function () {
    const total = calcularTotalCarrito();
    
    if (total === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const confirmacion = confirm(`¿Estás seguro de que quieres pagar $${total.toFixed(0)}?`);

    if (confirmacion) {
        
        // Vaciar carrito

        localStorage.clear();

        // Actualizar la interfaz

        actualizarContadorCarrito();
        mostrarContadoresCarrito();

        // Mensaje de agradecimiento
        
        alert("Tu compra fue de " + `$${total.toFixed(0)}` );
    }
});
