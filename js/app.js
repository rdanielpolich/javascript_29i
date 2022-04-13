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

//Callbacks

let numeros = [37, 11, 2, 15, 26, 52, 48, 8, 100];

let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});

//filter

let pares = numeros.filter(function (num) {
  return numero % 2 === 0;
});

let mayor10 = numeros.filter(function (num) {
  return num > 10;
});

//find

let alumnos = ["Lucas", "Pablo", "Fabrizio", "Jorge"];

let resultadoBusqueda = alumnos.find(function (alumno) {
  return alumno === "Mateo";
});

let resultadoBusquedaNumeros = numeros.find(function (numero) {
  return numero < 10;
});

//map

let numerosDobles = numeros.map(function (num) {
  return num * 2;
});

let nombresMayus = alumnos.map(function (alumno) {
  return alumno.toUpperCase();
});

//for each

alumnos.forEach(function (alumnos) {
  let nombresMayuscula = alumno.toUpperCase();
  console.log("Hola, soy", nombreMayuscula);
});

/* Tarea 1
-----------
Dado 3 arreglos de números unir todos en uno solo y
ordenarlos de mayor a menor
*/

let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];

function ejercicio1() {
  let numerosParaOrdenar = numeros1.concat(numeros2, numeros3);
  let = numeros.sort(function (a, b) {
    return a - b;
  });
}

/*
Tarea 2
---------
  Filtrar de un arreglo de personas todos los nombres que contengan la letra "m"
*/

let personas = [
  "Joaquín",
  "Daniel",
  "Magdalena",
  "Gonzalo",
  "Armando",
  "Samuel",
  "Valentina",
];

function obtenerNombreconletra(letra) {
  let nombres = personas.filter(function (nombre) {
    return nombre.toUpperCase().includes(letra.toUpperCase);
  });
  return nombres;
}
console.log(obtenerNombreConLetra("m"));

/*
Tarea 3
----------
Tomar una lista de lenguajes de programación y 
mostrar en consola una lista ordenada con los nombres 
ordenados alfabéticamente y en mayúsculas sin mutar el arreglo original.

*/

let lenguajes = ["javascript", "python", "c++", "c#", "java", ".net"];

function ordenarLenguajes() {}
