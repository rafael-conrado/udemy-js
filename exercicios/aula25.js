// armazenar o valor já convertido
const numero =Number(prompt ("diz ai um número:  "));
// salva um elemento em uma variavel
const numeroTitulo = document.getElementById('numero-titulo')
// salva um elemento em uma variavel
const texto = document.getElementById('texto')


numeroTitulo.innerHTML = numero;
//texto.innerHTML += `Seu número é: ${numero} <br/>`;
texto.innerHTML = "";
texto.innerHTML += `Raiz quadrada: ${Math.pow(numero,2)}<br/>`;
texto.innerHTML += `${numero} é um número inteiro? ${Number.isInteger(numero)}<br/> `;
texto.innerHTML += `É NaN:${Number.isNaN(numero)} <br/>`;
texto.innerHTML += `Arrendondando para baixo ${Math.floor(numero)} <br/>`;
texto.innerHTML += `Arrendondando para cima ${Math.ceil(numero)}<br/>`;
texto.innerHTML += `Com dua casas ${numero.toFixed(2)}<br/>`;



// document.body.innerHTML += `Seu número é: ${numero} <br/>`;
// document.body.innerHTML += `Raiz quadrada: ${Math.pow(numero,2)}<br/>`;
// document.body.innerHTML += `${numero} é um número inteiro? ${Number.isInteger(numero)}<br/> `;
// document.body.innerHTML += `É NaN:${Number.isNaN(numero)} <br/>`;
// document.body.innerHTML += `Arrendondando para baixo ${Math.floor(numero)} <br/>`;
// document.body.innerHTML += `Arrendondando para cima ${Math.round(numero)}<br/>`;
// document.body.innerHTML += `Com dua casas ${numero.toFixed(2)}<br/>`;



// const nome = "rafael carneiro de souza conrado"
// document.body.innerHTML +=`Seu nome é ${nome} <br/>`;
// document.body.innerHTML +=`Seu nome tem ${nome.length} letras <br/>`;
// document.body.innerHTML +=`A segunda letra do seu nome é:  ${nome[1]}<br/>`;
// document.body.innerHTML +=`Qual primeiro indice da letra Z em seunome: ${nome.indexOf('z')} <br/>`;
// document.body.innerHTML +=`Qual o último índice da letra C em seu nome: ${nome.lastIndexOf('c')}<br/>`;
// document.body.innerHTML +=`As 3 últimas letras do seu nome são:${nome.slice(-3)} <br/>`;
// document.body.innerHTML +=`As palavras do seu nome são:${nome.split(" ").length}/>`;