//alert("hola soy fan de Js");

//document.write("hello world");

//document.write(3 + 5);

let nombre = "Eugenio Daniel";
let apellido = "Perez";
let frase = "               Bienvenido a la clase";

//cuantos caracteres

console.log("El nombre tiene", nombre.length, "caracteres");

console.log(nombre.length);

console.log(frase.length);

//como quitar espacios en blanco adelante y atras
console.log(frase);

frase = frase.trim();

console.log(frase);
console.log(frase.length);

//mayusculas
console.log(apellido.toUpperCase());

//minusculas
console.log(nombre.toLowerCase());

//extraer una letra
console.log(frase.charAt(10));
console.log(frase.substring(0, 2));

console.log(nombre.substring(15));

//separar letras
console.log(apellido.split(""));
console.log(frase.split(" "));

let texto = "Hola-que-así";

// unir arreglo de palabras
let arregloTexto = texto.split("-");

console.log(arregloTexto.join(" "));

//obtener la ultima letra de una palabra o frase
console.log(apellido.charAt(apellido.length - 1));

//tarea

let palabra = "marmota";

console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());

let palabraCapitalizada =
  palabra.charAt(0).toUpperCase() + palabra.substring(1);

console.log(palabraCapitalizada);

//template string

console.log("Bienvenido nombre apellido, gracias por tu visita");
console.log(`Bienvenido ${nombre} ${apellido}, gracias por tu visita`);
