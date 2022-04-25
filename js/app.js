//usuarios

class Usuario {
  constructor(nombre, username, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.pass = password;
    this.estado = estado;
  }

  presentacion() {
    console.log("-----Tarjeta de Presentacion-----");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nombre de Usuario: ${this.username}`);
  }
}

let user1 = new Usuario("Pepito", "pepe", "123456");
let user2 = new Usuario("Josefina", "jose2022", "123ttt");
