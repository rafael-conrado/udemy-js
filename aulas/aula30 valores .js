/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol)- Valor - criar um local na memória

Referencia (mutável,) - array, object, function - apontar para o mesmo local
*/

let nome = "rafael";
console.log(nome[0]);//r
nome[0] = 'B';
console.log(nome[0]);//r
console.log(nome);//rafael

let a = "A";
let b = a;//referencia de a para b, 'b' só depende de 'a' para pegar seu valor
let bb =[...a] //faz uma cópia do array 'a' sem sofrer modificações de a
console.log(a,b)// A A
a='C';
console.log(a,b)// C A




let a1  = [1,2,3];
let b1 = a1 ;// b1 referência o mesmo local na memória de a1
console.log(a1,b1);
a.push(4);
console.log(a1);//[1,2,3,4]
console.log(b1);//[1,2,3,4]
b.pop();
console.log
console.log(a1);//[1,2,3]
console.log(b1);//[1,2,3]


const d = { 
    nome:"rafel",
    sobrenome: "conrado"
};

const e = {d};
console.log(e)//{ nome:"rafel",sobrenome: "conrado"}

d.nome="julio"
console.log(e)//{ nome:"julio",sobrenome: "conrado"}

const e = {...d};
console.log(d)//{ nome:"rafel",sobrenome: "conrado"}
console.log(e)//{ nome:"julio",sobrenome: "conrado"}
