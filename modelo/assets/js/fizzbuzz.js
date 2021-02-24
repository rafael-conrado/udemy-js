function teste(numero) {

    while (numero <= 15) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            console.log(`${numero} é divisivel por 3 e 5 fizzBuzz `)
            
        } else if (numero % 5 === 0) {
            console.log(`${numero} é divisivel por 5, buzz `)
            
        } else if (numero % 3 === 0) {
            console.log(`${numero} é divisivel por 3, fizz `)
            
        }else{
            console.log(numero)

        }
        numero++
    }

}

teste(1)



function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0 ) return 'fizzbuzz';
    if ( numero %3 == 0) return 'fizz';
    if (numerp % 5 ===0 ) return 'buzz'
    return numero
}

for ( let i = 0; i<=100; i++){
    console.log(i,fizzBuzz(i))
}