const lukeLogin = () => {
    let array = [];
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!";
  }
  
  const leiaLogin = () => {
    let array = [];
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia logada com sucesso!";
  }

  console.log(lukeLogin());
  console.log(leiaLogin());  

  const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin = (nome) => { //higher order function
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return acesso(nome)
  }

  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }
  
  console.log(usuarioLogin("Luke"));
  console.log(usuarioLogin("Leia"));

  console.log(usuarioLogin("Heron"));

  console.log(login({cargo: `diretoria`, nome: `Pessoa`}, autentica));