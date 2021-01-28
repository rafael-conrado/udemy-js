/* 
const data = new Date() envia a dara atual

const data = new Date(2021,00,27) inserir : ano, mês -1, dia, hora, minutos, segundos, milisegundos

data em string 
const data = new Date(''2021-01-27 ), pode deixar um espaço após o dia ou colocar um "t" no final new Date(''2021-01-27T)
console.log(data.toString())

capturar dados
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()+1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

*/
/* function inserirZero(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = inserirZero(data.getDate());
    const mes = inserirZero(data.getMonth() + 1);
    const ano = inserirZero(data.getFullYear());
    const hora = inserirZero(data.getHours());
    const min = inserirZero(data.getMinutes());
    const seg = inserirZero(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
} */

/* const hoje = new Date();
const dataBtasil = formataData(hoje)
console.log(formataData(hoje)) */


/* const diaSemana = hoje.getDay();

const data = new Date('1993-08-07 00:00:00')
let diaDaSemana = data.getDay();
let diaDaSemanaTexto;

switch (diaDaSemana) {
    case 0:
        diaDaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaDaSemanaTexto = "Segunda";
        break;
    case 2:
        diaDaSemanaTexto = "Terça";
        break;
    case 3:
        diaDaSemanaTexto = "Quarta";
        break;
    case 4:
        diaDaSemanaTexto = "Quinta";
        break;
    case 5:
        diaDaSemanaTexto = "Sexta";
        break;
    case 6:
        diaDaSemanaTexto = "Sábado";
        break;
} 
console.log(diaDaSemana, diaDaSemanaTexto)
console.log(diaSemana) */

function getDiaDaSemanaTexto(diasemana) {
    let diaDaSemanaTexto;
    switch (diaDaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = "Segunda";
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = "Terça";
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = "Quarta";
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = "Quinta";
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = "Sexta";
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = "Sábado";
            return diaDaSemanaTexto;
    } 
    
}