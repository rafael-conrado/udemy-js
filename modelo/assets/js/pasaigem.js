function calcular(altura2, largura2) {

    const form = document.querySelector('#formulario');
    form.addEventListener('submit', function (e) {
        e.preventDefault()
    })

    const inputAltura = document.querySelector('#altura');
    const inputLargura = document.querySelector('#largura');
    const resultado = document.querySelector("#resultado");
    const altura = Number(inputAltura.value);
    const largura = Number(inputLargura.value);
    resultado.innerHTML = ''
    !altura || !largura ? alert("error, um ou mais valores inválidos") : altura < largura ? resultado.innerHTML = `Paisagem ${true}` : resultado.innerHTML = `Retrato ${false}`
    



}


//const ePaisagem = (largura,altura) =>largura>altura;