const alunos = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", 
"a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20"];

//const sala1 = alunos.slice(0, 10);

//const sala2 = alunos.slice(10,20);
// ou const sala2 = alunos.slice(10);  

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);
console.log(sala1);
console.log(sala2);