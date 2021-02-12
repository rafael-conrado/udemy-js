function compara(val1, val2) {
    const valor1 = Number(val1);
    const valor2 = Number(val2);


    (!valor1 || !valor2) ? console.log('não pode '): ((valor1 > valor2) ? console.log(`O maior valor é ${valor1}`) : console.log(`O maior valor é ${valor2}`))
}
compara(2,3)


const compara2 = (v1, v2) => {
    const valor1 = Number(v1);
    const valor2 = Number(v2);
    (!valor1 || !valor2) ? console.log('não pode função 2 '): ((valor1 > valor2) ? console.log(` função 2 O maior valor é ${valor1}`) : console.log(` funcção2 O maior valor é ${valor2}`))
}
compara2(2, 3)