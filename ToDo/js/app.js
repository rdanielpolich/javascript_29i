let tareas = [];
let counter = document.getElementById("contador");
let contenedorTarjetas = document.getElementById("contenedor");

const handleSubmit = function (e) {
  console.log(e);
  e.preventDefault();
  let tarea = document.getElementById("text_area").value;
  tareas.push(tarea);
  console.log(tareas);
  tarea.value = "";
  tarea.select();
  agregarTarjeta();
};

const agregarTarjeta = function () {
  contenedorTarjetas.innerHTML = "";
  tareas.forEach(function (tarea, index) {
    let tarjeta = document.createElement("div");
    tarjeta.classList = "card mb-1";
    let contenidoTarjeta = `<div class="card-body d-flex justify-content-between align-items-center">
    <span>${tarea}</span><button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">X</button></div>`;

    tarjeta.innerHTML = contenidoTarjeta;

    contenedorTarjetas.appendChild(tarjeta);
  });
  counter.innerText = tareas.length;
};

function borrarTarea(index) {
  tareas.splice(index, 1);
  agregarTarjeta();
}

document.getElementById("formulario").addEventListener("submit", handleSubmit);
