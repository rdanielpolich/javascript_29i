//Math

//redondeando nros

let num1 = 78.9;

console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));

//obtener el valor máximo de una lista de nros

console.log(
  `El numero maximo de la lista es ${Math.max(
    56,
    23,
    -802,
    1000,
    2356,
    1000000,
    2563987
  )}`
);

//obtener el valor minimo
console.log(
  `El numero minimo de la lista es ${Math.min(
    56,
    23,
    -802,
    1000,
    2356,
    1000000,
    2563987
  )}`
);

//convertir a nro entero

let numero = 67.8523169;
console.log(parseInt(numero));
//convertir a decimal
let numero2 = "456.23598";
console.log(parseFloat(numero2));

//elevar un nro a una potencia
let base = 12;
let exponente = 2;

console.log(
  `El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(
    base,
    exponente
  )}`
);

//raiz cuadrada

console.log(`La raiz cuadrada de 64 es ${Math.sqrt(64)}`);

//numeros aleatorios
console.log(Math.ceil(Math.random() * 50));

//devolver dos decimales

console.log(Math.round(numero * 100) / 100);

console.log(parseFloat(numero.toFixed(2)));

//prompt

let numerito = prompt("ingrese un nro decimal");

console.log(numerito * 2);

console.log(`El numero ${numerito} redondeado es ${Math.round(numerito)}`);
