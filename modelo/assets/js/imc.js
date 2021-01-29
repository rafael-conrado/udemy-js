//captura do formulario
const form = document.querySelector('#formulario');
//'observou' o evendo do submit e cancelou a ação do form de atualizar sozinho
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //receber dados dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    //conversão dos valores
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura)
    //validação dos campos
    if (!peso && !altura) {
        setResultado('')
        setResultado("peso e altura inválidos !", false)
        console.log(peso)
        return;
    }
    if (!peso) {
        setResultado('')
        setResultado("peso inválido !", false)
        console.log(peso)
        return;
    }
    if (!altura) {
        setResultado('')
        setResultado("Altura inválido !", false)
        console.log(altura)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    const msg = `seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg, true)
});

//calcular o imc
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
//definir nivel do imc apartir do calculo feito em outra função(cada função deve fazer apenas uma coisa)
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc >= 39.9) return nivel[5]

    if (imc >= 34.9) return nivel[4]

    if (imc >= 29.9) return nivel[3]

    if (imc >= 24.9) return nivel[2]

    if (imc >= 18.5) return nivel[1]

    if (imc < 18.5) return [0]
}

//criar um elemento html
function criaP() {
    const p = document.createElement('p');
    return p;
}
//setar o resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''
    const p = criaP();
    isValid ? p.classList.add('paragrafoResultado') : p.classList.add('paragrafoVazio');
    p.innerHTML = msg;
    resultado.appendChild(p) //inserir elemento filho no pai DIV
}