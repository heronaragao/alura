const numero=456;
const numeroString = "456";

console.log(numero === numeroString);
console.log(numero == numeroString);
// essa é uma conversão implícita. nuero foi convertido para string antes da comparação

console.log(numero + numeroString);
console.log(numeroString + numero);
// outro exemplo de conversão implícita. Converteu para string e fez concatenação

// conversão explícita
console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);
