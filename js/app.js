//Objetos

let alumno = {
  nombre: "Josefina Alvarez",
  edad: 38,
  dni: 29148728,
  curso: "Fullstack",
  saludar: function () {
    console.log(`Hola soy ${this.nombre}`);
  },
  calcularVejez: function () {
    if (this.edad > 35) {
      console.log("tamos cerca de los 40 amigo 👴");
    } else console.log("tranquilo todavia hay esperanza");
  },
};

// obtener valores
console.log(alumno.nombre);
console.log(alumno["curso"]);

//agregar una propiedad
alumno.domicilio = "Esquina Norte";

//modificar un valor de una propiedad
alumno.nombre = "Josefina Gonzalez";

//eliminar una propiedad del objeto
// delete alumno.edad;

//Como puedo recorrer un objeto
for (const atributo in alumno) {
  if (atributo !== "saludar") {
    console.log(`${atributo}: ${alumno[atributo]}`);
  }
}

/*
Objeto Persona con las propiedades nombre,edad y genero
y el metodo obtDetalles(), que muestra por pantalla las
propiedades de la persona
*/

let persona = {
  nombre: "Florencia Espeche",
  edad: 34,
  genero: "Femenino",
  obtDetalles: function () {
    for (const propiedad in this) {
      if (propiedad !== "obtDetalles") {
        console.log(`${propiedad}: ${this[propiedad]}`);
      }
    }
  },
};

/*
2- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

*/

let auto = {
  color: "rojo",
  marca: "Fiat",
  modelo: "Palio",
  anio: "2018",
  encendido: false,
  encenderApagar: function () {
    this.encendido = !this.encendido;
    if (this.encendido) {
      console.log("El vehiculo esta encendido");
    } else {
      console.log("El vehiculo esta apagado");
    }
  },
};
