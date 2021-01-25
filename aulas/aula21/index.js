//substituir a letra "r"
let string= "o rato roeu a roupa do rei de roma"
console.log(string.replace(/r/, "#"));//troca só a primeira
console.log(string.replace(/r/g, "#"));//troca todas

console.log(string.slice(2,6))//recortar/fatiar uma palavra
console.log(string.toLocaleLowerCase())//tudo em minusculo
console.log(string.toLocaleUpperCase())//tudo em maiusculo

