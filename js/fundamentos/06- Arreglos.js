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

// let alumnos = ["Pablo", "Fabricio", "Gabriela", "Lucas"];

// mostrar un elemento
// alumnos[2]; //Gabriela

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

/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras 
- primera palabra
- última palabra 
- las palabras colocadas en orden inverso
- las palabras ordenadas de la a la z  
- las palabras ordenadas de la z a la a. 
- Sacar toda esta información en consola
*/

// let frase = "La sonrisa es la mejor respuesta para una mirada";
// let palabras = frase.toLowerCase.split(" ");
// console.log(`La cantidad de palabras es ${palabras.length}`);
// console.log(`La primera palabra es "${palabras[0]}`);
// console.log(`La ultima palabra es "${palabras[palabras.length - 1]}`);
// console.log(palabras.reverse());
// console.log(palabras.sort());
// console.log(palabras.sort().reverse());

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

// let lista = [23, 45, 78, 96, 145, 745];

// let numero = parseInt(prompt("Ingrese un nro:"));

// if (lista.includes(numero)) {
//   console.log(`El numero ${numero} se encuentra en la lista`);
// } else {
//   console.log(`El numero ingresado no está en la lista`);
// }

/*Tarea 3:
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

- Imprime la clasificación actual
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

- Celia adelanta a Raúl
- Antonio es descalificado y se elimina del concurso
- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
- Hay una nueva participante que pasa a encabezar la clasificación: Marta
- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
*/

let clasificaciones = [];
clasificaciones.push("Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio");
console.log(clasificaciones);

// Celia adelanta a raúl
clasificaciones.splice(2, 2, "Celia", "Raúl");

// Antonio es descalificado
clasificaciones.pop();

// Entre Ana y Oswaldo se clasifican dos concursantes

clasificaciones.splice(1, 0, "Roberto", "Amaya");

// Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificaciones.unshift("Marta");

// Imprimir la clasificacion actual
console.log(clasificaciones);

const newArray = clasificaciones.slice(4);

/*Tarea 4: 
- Pedir por pantalla el nombre de 5 alumnos de la comisión. Usar ciclo while
- Guardarlos en un arreglo llamado rollingCoders
- Usando el arreglo mostrar en consola por cada uno un mensaje de bienvenida al mundo del desarrollo web.
*/

let rollingCoders = [];

while (rollingCoders.lenght < 5) {
  rollingCoders.push(prompt("Ingrese el nombre del alumno"));
}

for (let index = 0; index < rollingCoders.length; index++) {
  console.log(
    `Hola ${rollingCoders[index]} bienvenid@ al mundo del desarrollo web`
  );
}
