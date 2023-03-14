notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(media);

notas.push(9);

const media1 = (notas[0] + notas[1] + notas[2] + 
    notas[3] + notas[4])/notas.length;

console.log(media1);

//notas.pop(); remove o último elemento do array
