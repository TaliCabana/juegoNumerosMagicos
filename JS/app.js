/* Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let numeroMagico = null;

// Función para crear número aleatorio:
function generarNumeroMagico() {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  alert("El número mágico se ha generado 👻 tiene un valor entre 1 y 100");
}

// Función para verificar el número ingresado:
function verificarNumero(evento) {
  evento.preventDefault(); // Para evitar que el formulario se recargue

  const input = document.getElementById("numeroUsuario");
  const numeroIngresado = parseInt(input.value); // al valor del inpunt lo transf en entero

  if (!numeroMagico) {
    alert("⚠ Primero tocá el botón amarillo para comezar el juego.");
    return;
  }

  if (numeroIngresado === numeroMagico) {
    alert("🎉 ¡Felicidades! Adivinaste el número mágico.");
  } else if (numeroIngresado < numeroMagico) {
    alert("El número mágico era más alto 👆🏽");
  } else {
    alert("El número mágico era más bajo 👇🏽");
  }

  input.value = ""; // Para limpiar el input
}

// Asocuar eventos:
const botonComenzar = document.getElementById("botonComenzar")
botonComenzar.addEventListener("click", generarNumeroMagico)

const formulario = document.getElementById("formAdivinar");
formulario.addEventListener("submit", verificarNumero)
