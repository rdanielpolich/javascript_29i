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

console.log(numerosParaOrdenar);
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
