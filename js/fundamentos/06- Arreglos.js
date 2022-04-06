// let frase = prompt("Ingrese una frase");
// let vocales = "";

// for (let i = 0; i < frase.length; i++) {
//   let letra = frase.charAt(i).toLowerCase();

//   if (
//     (letra === "a") |
//     (letra === "e") |
//     (letra === "i") |
//     (letra === "o") |
//     (letra === "u")
//   ) {
//     vocales += letra;
//   }
// }

// console.log(vocales);
// console.log(
//   `la cantidad de vocales en la frase "${frase}" es de ${vocales.length}`
// );

// Arreglos o Arrays
// Lista o matrices

let alumnos = ["Pablo", "Fabricio", "Gabriela", "Lucas"];

// mostrar un elemento
alumnos[2]; //Gabriela

//mostrar el último elemento
// alumnos[alumnos.length - 1];

//Concatenar elementos en un string
// console.log(`los alumnos mas copados son`alumnos.join(","));

//Iterar los elementos de un arreglo

// for (let i = 0; i < alumnos.length; i++) {

//     console.log(`Hola soy ${alumnos[i]}`);

// }

for (const alumno of alumnos) {
  console.log(`Hola soy ${alumno}`);
}

//Agregar un elemento en el array

alumnos.push("Daniel", "Nayru");
alumnos.unshift("Joaquin");

//Eliminar elementos del arreglo

alumnos.pop();
alumnos.shift();

//Encontrar la posicion o índice de un elemento
console.log(alumnos.indexOf("Daniel"));

//Saber si un elemento se encuentra en el arreglo

console.log(alumnos.includes("Daniel"));

//Eliminar un elemento por su posicion

let pos = alumnos.indexOf("Lucas");
alumnos.splice(pos, 1);

//eliminar varios elementos del arreglo
alumnos.splice(0, 3);

//Agregar alumnos
alumnos.push("José", "Alberto", "Juan", "Joaquin");

//Agregar elementos desde una posicion en particular
alumnos.splice(3, 0, "Franco", "Pablo");

//reemplazar elementos en una posicion
alumnos.splice(5, 2, "Edmundo", "Felipe");

// nuevo arreglo
let alumnas = ["Gabriela", "Rosita", "Nayru", "Rocio", "Dami", "Agostina"];

//concatenar arreglos

let comision = alumnos.concat(alumnas);

// ordenar array de a-z
console.log(comision.sort());

//Ordene de la z-a previo sort
console.log(comision.reverse());

// extraer en un nuevo array

let ausentes = comision.slice(3, 7);

//enigma universal

console.log(["🐔", "🥚"].sort());
