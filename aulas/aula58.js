const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if (numero === 2) {
        continue;
        // encontrado a plavra continue, a engine pula para próxima interação sem executar o código, daqui para baixo nada acontece

    }
    console.log(numero);
}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
for (let num of numeros) {
    if (num === 7) {
        break;
        //não sera executado mais nada a partir daqui
    }
    console.log(num)
}