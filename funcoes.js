function imprime(texto){
    console.log(texto)
}

imprime("Bom dia");
imprime("Tenha um bom curso");  
imprime("Somei... " + soma());

function soma(){
    return 2 + 2
}

console.log(soma());
//valor padrão caso não seja passado argumento
function outraSoma(num1=0, num2=0){
    return num1 + num2;
}

imprime(outraSoma(7, 3));

const adiciona = function (n1, n2) {return n1+n2};
// expressão de função
console.log (adiciona(4,5));

// Hosting = antes de começar a interpretar o javascript pega todas as
//    declarações de funções e variáveis. Por isso pode-se usar uma função
//    ou variável antes da sua declaração no código.
//    O mesmo não acontece com as "let" e "const", devendo ser previamente
//    declaradas.