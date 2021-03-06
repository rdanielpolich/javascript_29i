//DOM
//DOCUMENT OBJECT MODEL

//Obtener elemento por etiqueta
let titulo1 = document.getElementsByTagName("h1");

//Obtener elemento por ID
titulo2 = document.getElementById("title");

//Obtener elemento por clase
let titulo3 = document.getElementsByClassName("titulo");

let parrafo1 = document.querySelector("h3");
let parrafo2 = document.querySelector("#parrafito");
let parrafo3 = document.querySelector(".text-center");

//cambiar el valor de un elemento
titulo2.innerText = "Bienvenidos al DOM";
parrafo2.innerText = "Clase páctica de Javascript";

//Agregar un elemento al DOM
let nuevoParrafo = document.createElement("p"); //crear elemento
nuevoParrafo.innerText = "Esto es un parrafo creado con JS"; //darle contenido
document.body.appendChild(nuevoParrafo); //insertarlo al elemento padre

let imagen = document.createElement("img");
imagen.src =
  "https://imagenes.razon.com.mx/files/image_940_470/uploads/2020/06/03/5ed7fc823c5e8.jpeg";
imagen.alt = "imagen bonita";
imagen.classList = "img-dom";
imagen.id = "imagencita";
document.body.appendChild(imagen);

//insertar un elemento antes de otro

//reemplazar un elemento
let span = document.createElement("span");
span.innerText = "esto es una etiqueta span";

document.body.replaceChild(span, parrafo2);

//quitar un elemento

document.body.removeChild(nuevoParrafo);

//clonar un elemento
document.body.appendChild(imagen.cloneNode(true));
document.body.appendChild(imagen.cloneNode(true));

let lista = document.getElementById("lista");
let item = document.createElement("li");
let ul = document.querySelector("ul");
item.innerText = "Hacer la tarea que mando Gaby";
ul.appendChild(item);

//Eventos
function mostrarMensaje() {
  alert("esto es un mensaje importante!!");
}

function saludar(nombre) {
  console.log(`hola ${nombre}`);
}

function cambiarColor() {
  document.querySelector("#campo").classList = "fondo";
}

function quitarColor() {
  document.querySelector("#campo").classList = "";
}

function cambioInput(e) {
  console.log(e.target.value);
}

let nombre = "";
function obtenerNombre(e) {
  nombre = e.target.value;
}

function inputSaludar(e) {
  alert(`Bienvenido ${nombre}`);
}

let darkmode = false;
function modoOscuro() {
  if (!darkmode) {
    document.body.classList = "dark-mode";
    darkmode = true;
  } else {
    document.body.classList = "";
    darkmode = false;
  }
}

document
  .getElementById("text_nombre")
  .addEventListener("change", obtenerNombre);

document.getElementById("toggle").addEventListener("click", modoOscuro);
