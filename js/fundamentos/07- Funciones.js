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
