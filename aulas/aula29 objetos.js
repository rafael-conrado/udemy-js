const pessoa = {
nome: 'Rafael',
sobrenome: 'conrado',
idade: 27
};

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

function criarPessoa(nome,sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };    
}

 const pessoa1 = criarPessoa("leando","maluco", 35)
 console.log(pessoa1)


 const pessoa2 ={
     nome:"rafa",
     sobrenome: "souza",
     idade:36,

     fala(){
         console.log(`${this.nome } ${this.sobrenome} esta falando oi...`)
     }
 }

pessoa2.fala();
