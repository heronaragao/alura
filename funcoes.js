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