const alunos = ["alu1", "alu2", "alu3", "alu4"];
const medias = [9, 7, 8, 10];

const alunosEMedias = [alunos, medias];

function exibeNomeNota(aluno){
    if (alunosEMedias[0].includes(aluno)){
        //const alunos = alunosEMedias[0];
        //const medias = alunosEMedias[1];  OU
        const [alunos, medias] = alunosEMedias;
        //desestruturação de listas

        // const indice = alunosEMedias[0].indexOf(aluno) 
        const indice = alunos.indexOf(aluno)
//        return `${aluno} cadastrado. Sua nota é ${alunosEMedias[1][indice]}`
        return `${aluno} cadastrado. Sua nota é ${medias[indice]}`
    } else{
        return `${aluno} nao cadastrado.`
    }
}

console.log(exibeNomeNota("alu1"));