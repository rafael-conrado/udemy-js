/* luiz otavio miranda tem 30 anos, pesa 84 kg,
tem 1.8 metros de altura e seu IMC é de 25.695
 */

const nome = "Rafael";
const sobreNome = "Conrado";
const peso = 60;
const altura = 1.78
let imc = ((peso / altura) * altura).toFixed(2)
const anoAtual = 2021
const anoNascimento = 1993
let idade = anoAtual - anoNascimento

console.log(`${nome} ${sobreNome}, tem ${idade} anos, pesa ${peso} Kg, tem ${altura} metros de altura e seu IMC é de ${imc}, nasceu em ${anoNascimento}.`)
