const numero = 256
const convertidoEmString = new String(numero)

const num = 500
console.log(num.toString()) //'500'

let nome = "André"
let sobreNome ="Silva"
let nomeCompleto = "Meu nome completo é : " + nome + " " + sobreNome

let saudacoes = "Seja bem-vindo "
saudacoes += nome

let saudacao =`Seja bem-vindo ${nome}`

let poema = `
   E agora, ${nome}?
   A festa acabou,
   a luz apagou,
   o povo sumiu,
   a noite esfriou,
   e agora, ${nome}?
   e agora, você?
   você que é sem nome,
   que zomba dos outros,
   você que faz versos,
   que ama, protesta?
   e agora, ${nome}?
`
const palavra="Alura";
console.log(palavra.length) //5
console.log(palavra.charAt(3)) //r
console.log(palavra[0]) //A
console.log(palavra.indexOf("a")) //4

const palavra1="Divertidamente"
console.log(palavra1.indexOf("e")) //3

console.log(palavra.toUpperCase()) //ALURA
console.log(palavra.toLowerCase()) //alura

let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,11)) // Mergulhando
console.log(frase.slice(0,11)) // Mergulhando

let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));
let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com
//variante: trimEnd(),trimStart(),trimLeft() e trimRight()

