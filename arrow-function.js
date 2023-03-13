function apresentar (nome) {
    return `Meu nome é ${nome}`
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const somaArrow = (n1, n2) => n1 + n2;

console.log(apresentarArrow("Heron"));
console.log(somaArrow(3,9));

const somaPequenos = (n1, n2) => {
    if (n1 > 10 || n2 > 10){
        return "Use números menores que 10";
    } else {
        return n1+n2;
    }
}

console.log(somaPequenos(2,3));