// Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese
// momento se crea un número aleatorio que el usuario deberá adivinar,
// la interfaz del usuario debe tener además un input para ingresar un número y
// un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario
// adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero
// que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que
// adivino el numero.

const playGame = function () {
  let numero = Math.ceil(Math.random() * 10);
  document.querySelector("#play").disabled = true;
  console.log(numero);
};

function probarNro() {
  let numeroJugador = document.getElementById(numero_jugador).value;
  console.log(numeroJugador);

  if (numeroJugador == numero) {
    alert("GANASTE");
    document.getElementById(numero_jugador).value = "";
    document.getElementById(numero_jugador).focus();
    document.querySelector("#play").disabled = false;
  } else if (numeroJugador > numero) {
    alert("el numero ingresado es MAYOR que el nro mágico");
    document.getElementById(numero_jugador).select();
  } else {
    alert("el nro ingresado es MENOR que el numero mágico");
    document.getElementById(numero_jugador).select();
  }
}
