 const data = new Date();
 const diaSemana = data.getDay();
 const resultadoDia = document.querySelector('#dia');
 //const resultadoDia = document.querySelector('#data h1')



 function diaDaSemana(dia) {
     const diasSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
     return diasSemana[dia];
     /* switch (dia) {
         case 0:
             return 'Domingo';
         case 1:
             return 'Segunda-feira';
         case 2:
             return 'Terça-feira';
         case 3:
             return 'Quarta-feira';
         case 4:
             return 'Quinta-feira';
         case 5:
             return 'Sexta-feira';
         case 6:
             return 'Sábado';
     } */
 }

 function editaMes(mes) {
     const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',]
     return meses[mes];
     /* switch (mes) {
         case 1:
             return 'Janeiro';
         case 2:
             return 'Fevereiro';
         case 3:
             return 'Março';
         case 4:
             return 'Abril';
         case 5:
             return 'Maio';
         case 6:
             return 'Junho';
         case 7:
             return 'Julho';
         case 8:
             return 'Agosto';
         case 9:
             return 'Setembro';
         case 10:
             return 'Outubro';
         case 11:
             return 'Novembro';
         case 12:
             return 'Dezembro'; */
     }

 

 resultadoDia.innerHTML = `${diaDaSemana(diaSemana)}, ${data.getDay()}
 de ${editaMes(data.getUTCMonth() )} de ${data.getFullYear()} agora são ${data.getHours()}:${data.getUTCMinutes()} `
console.log(typeof(diaSemana))

 // metodo aprendido na correção
 const h2 = document.querySelector('#curto');
 const data1 = new Date();
 h2.innerHTML = data1.toLocaleString("pt-BR", {
     dateStyle: "full",
     timeStyle: "short"
 });