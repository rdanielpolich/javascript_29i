//Funciones

// function name() {

// }

//Declarativas

let nombre = "Santiago";
let apellido = "Gonzalez";
function saludarPersona(parametro1, parametro2) {
  console.log(`Hola ${parametro1} ${parametro2}`);
}

saludarPersona(nombre, apellido);

let num1 = 35;
let num2 = 78;

function sumarValores(valor1, valor2) {
  if (isNaN(valor1) || isNan(valor2))
    console.warn("Alguno de los valores no es correcto");
  console.log(`${valor1} + ${valor2}=${valor1 + valor2}`);
}

sumarValores(num1, num2);

//funciones anónimas o de expresion
const multiplicacion = function () {
  console.log(num1 * num2);
};

const calculadora = function (valor1, valor2, operacion = "+") {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.warn("falta un valor requerido o es incorrecto");
  } else {
    switch (operacion) {
      case "+":
        console.log(`${valor1} + ${valor2}=${valor1 + valor2}`);
        break;
      case "-":
        console.log(`${valor1} + ${valor2}=${valor1 + valor2}`);
        break;
      case "*":
        console.log(`${valor1} + ${valor2}=${valor1 + valor2}`);
        break;
      case "/":
        console.log(`${valor1} + ${valor2}=${valor1 + valor2}`);
        break;

      default:
        console.warn("la operacion ingresada no es valida");
        break;
    }
  }
};

//return

const multiplicacion = function () {
  console.log(num1 * num2);
};

const calculadoraReturn = function (valor1, valor2, operacion = "+") {
  if (isNaN(valor1) || isNaN(valor2)) {
    return "falta un valor requerido o es incorrecto";
  }
  switch (operacion) {
    case "+":
      return `${valor1} + ${valor2}=${valor1 + valor2}`;

    case "-":
      return `${valor1} + ${valor2}=${valor1 + valor2}`;

    case "*":
      return `${valor1} + ${valor2}=${valor1 + valor2}`;

    case "/":
      return `${valor1} + ${valor2}=${valor1 + valor2}`;

    default:
      return "la operacion ingresada no es valida";
  }
};

//funciones anidadas

function cubo(num) {
  return Math.pow(num, 3);
}

let numeros = [23, 45, 2, 79];

function convertirACubo(arreglo, funcion) {
  let numerosAlCubo = [];
  for (let index = 0; index < arreglo.length; index++) {
    let numeroAlCubo = funcion(arreglo[index]);
    numerosAlCubo.push(numeroAlCubo);
  }

  return numerosAlCubo;
}

console.log(convertirACubo(numeros, cubo));

//Scope de una funcion

let heroe = "Superman";

function presentarHeroe() {
  let heroe = "Batman";
  return `bienvenido ${heroe}`;
}

console.log(presentarHeroe());

//diferencias entre declarativas y anonimas

console.log(calcularDescuento(2500, 15));

function calcularDescuento(precio, descuento) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;

  return `El importe a abonar es de $${montoConDescuento}`;
}

const calcularDescuento2 = function (precio, descuento) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;

  return `El importe a abonar es de $${montoConDescuento}`;
};
console.log(calcularDescuento2(3000, 15));

/*
1- Definir una función que muestre información sobre una
 cadena de texto que se le pasa como argumento. A partir de 
 la cadena que se le pasa, la función determina si esa cadena 
 está formada sólo por mayúsculas, sólo por minúsculas o por 
 una mezcla de ambas.
*/

const examinarCadena = function (cadena) {
  if (cadena === cadena.toUpperCase()) {
    return `el texto esta en MAYÚSCULAS`;
  }
  if (cadena === cadena.toLowerCase()) {
    return `el texto esta en minúsculas`;
  }

  return "el texto tiene MAYUSCULAS y minusculas";
};

/*
2- Solicitar por pantalla al usuario ingresar el valor 
de los lados de un rectángulo, luego crear una función para 
calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

*/

let ladoA = Number(prompt("ingrese la altura  del rectángulo"));
let ladoB = Number(prompt("ingrese el ancho del rectángulo"));

const perimetroRectangulo = function (alto, ancho) {
  return 2 * (alto + ancho);
};

document.write(
  `el perimetro del rectángulo es de ${perimetroRectangulo(ladoA, lad)}`
);
