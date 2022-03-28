let numeroAleatorio = Math.ceil(Math.random() * 100);
let Raiz = Math.sqrt(numeroAleatorio);
let numeroDecimal = parseFloat(Raiz.toFixed(2));
console.log(
  `la raiz cuadrada del número ${numeroAleatorio} es de ${numeroDecimal}`
);
