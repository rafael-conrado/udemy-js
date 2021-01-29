/// ...rest pega o resto do array
// ... spread

const numeros = [1000, 'reais', 3000, 4000, 5000, 6000, 7000];
const [primeiroItem, segundoItem, ...resto] = numeros;
console.log(primeiroItem, segundoItem)
console.log(resto)

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete)

// acessar um array dentro de outro array

const num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(num[2][0]);//primeiro coloco dentro de [] o array quero e depois em [] o indice
const [,[,,seis]] = num;// mais complexo, pode se perder
console.log(seis)
const [lista1, lista2, lista3] = num
console.log(lista3[0])
