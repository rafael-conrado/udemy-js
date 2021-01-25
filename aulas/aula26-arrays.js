const alunos =  ['rafael','lidiane','luna'];

//adicionar no final do array
alunos.push("reginaldo"); 
alunos[3] = "Hercules";
console.log(alunos)

// tamanho do array
console.log(alunos.length)
console.log(alunos)

//adiciona no começo do array 
alunos.unshift('carlos');
console.log(alunos)

//remover elemento e o indice do final do array 
alunos.pop();
console.log(alunos)

//remover elemento sem alterar o indice
delete alunos[1]
console.log(alunos)

// remover do inicio da array
alunos.shift()
console.log(alunos)

//salvar em uma variavel o elemento excluído
const removido = alunos.pop();
console.log(alunos)

// fatiar elemento do array
alunos.slice(0,2)//(valor inicial, valor final +1)
console.log(alunos)

//saber se é um array
console.log(alunos instanceof Array)// true ou false
