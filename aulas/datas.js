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
function inserirZero(num) {
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
}

const hoje = new Date();
const dataBtasil = formataData(hoje)
console.log(formataData(hoje))


const diasemana = hoje.getDay();
console.log(diasemana)