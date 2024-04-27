// Pedir nombre al usuario y guardarlo.
let nombreUsuario = prompt("Hola! Me alegro que estes acá. Como te llamas?");

// Seleccionar el container del html para el texto bienvenida
let textoBienvenida = document.getElementById('mensaje-bienvenida');
console.log(textoBienvenida);

// Crear la funcion para que dependiendo el horario muestre un texto diferente
function actualizarMensaje() {

  let horarioActual = new Date().getHours();
  console.log(horarioActual);
  let mensajeBienvenida;

  if (horarioActual < 14) {
    mensajeBienvenida = "¡Buenos días, " + nombreUsuario + "! Espero que andes bien.";
  } else if (horarioActual < 19) {
    mensajeBienvenida = "¡Buenas tardes, " + nombreUsuario + "! Espero que andes bien.";
  } else {
    mensajeBienvenida = "¡Buenas noches, " + nombreUsuario + "! Espero que andes bien.";
  }

  textoBienvenida.innerText = mensajeBienvenida;
}

// Llamar a la funcion
actualizarMensaje();


// Seleccionar el container del html para mostrar el horario
let horarioActual = document.getElementById('hora-actual')
console.log(horarioActual);

// Crear la funcion para mostrar la hora y los minutos
function actualizarHorario() {

  let horaActual = new Date().getHours();
  let minutoActual = new Date().getMinutes();

  console.log(horaActual)
  console.log(minutoActual)

  let mostrarHorario;

  if (minutoActual < 10) {
    mostrarHorario = "Si no estoy loco, actualmente son las " + horaActual + ":0" + minutoActual + ".";
  }
  else {
    mostrarHorario = "Si no estoy loco, actualmente son las " + horaActual + ":" + minutoActual + ".";
  }

  horarioActual.innerText = mostrarHorario;
}

// Llamar a la funcion
actualizarHorario();

let carrito = [];

 // Productos del carrito
const productos = [
    { name: "notebook", price: 1500 },
    { name: "pantalla", price: 250 },
    { name: "teclado", price: 60 },
    { name: "mouse", price: 50 },
    { name: "auriculares", price: 100 },
    { name: "volante", price: 200 },
    { name: "parlante", price: 100 },
];

let saludoNegocio = confirm("Bienvenido a mi negocio " + nombreUsuario + "!. ¿Quieres agregar un producto al carrito? Recorda que si presentas tu carnet de socio del club River Plate tienes un 80% de descuento!(promoción valida solo en los locales de la calle 9.12.18)");

while (saludoNegocio === true) {
    alert("Elija el producto que quiera agregar:")
    let mostrarProductos = productos.map((productos) => productos.name);
    let seleccionProducto = prompt(mostrarProductos.join(", "));

    let productoEncontrado = productos.find(producto => producto.name === seleccionProducto);

    if (productoEncontrado) {
        let confirmacion = confirm("Agregaste " + seleccionProducto + " al carrito. ¿Está bien?");

        if (confirmacion === true) {
            carrito.push(productoEncontrado);
        } else {
            alert("Por favor, vuelva a seleccionar otro producto");
        }
    } else {
        alert("El producto seleccionado no existe. Por favor, seleccione uno válido.");
    }

    saludoNegocio = confirm("¿Desea agregar otro producto?");
}

let precioCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.price, 0);

// // Seleccionar el container del html para mostrar el precio total
let mostrarCarrito = document.getElementById('total-carrito');

 // // Crear la funcion para que muestre el precio total
function mostrarPrecio() {
    let cuentaDelCarrito;

    if (precioCarrito === 0) {
        cuentaDelCarrito = "Su carrito está vacío";
    } else {
        cuentaDelCarrito = "Su carrito contiene: " + carrito.map(producto => producto.name).join(", ") + " y suma un total de " + precioCarrito;
    }

    mostrarCarrito.innerText = cuentaDelCarrito;
}

// Llamar a la funcion
mostrarPrecio();














