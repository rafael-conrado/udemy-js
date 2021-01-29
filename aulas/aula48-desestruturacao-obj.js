const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Conrado',
    idade: 27,
    endereco: {
        rua: 'Cantori',
        numero: 12
    }
};
const {nome, sobrenome, idade}=pessoa
console.log(nome, sobrenome, idade)

const {endereco: {rua: r,numero}}=pessoa;
console.log(r)
console.log(pessoa)