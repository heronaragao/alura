const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i =0; i < numeros.length; i++){
    console.log(`O elemento da posição  ${i+1} é ${numeros[i]}`)
}

notas = [10, 6.5, 8, 7.5];
let media = 0;

for (let i = 0; i< notas.length; i++){
    media += notas[i]
}
console.log(media);
media = media / notas.length;
console.log(media);

media = 0;
for (let nota of notas){
    media += nota
}
media = media / notas.length;

console.log(media);
