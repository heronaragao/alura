const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

console.log ("alura" * 1);

//NaN -> not a number

console.log(9 / 0);

console.log(3.44 * 2.99);

console.log(Math.round(3.44 * 2.99));

console.log((3.44 * 2.99).toFixed(2));

const salarioHora = (2011 / 12.47); 

const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(formatado);

var lista = [10,1, 5, 9, 8, 12, 15];
lista.sort((a, b) => a - b); // [1, 5, 8, 9, 10, 12, 15]
console.log(lista);
