function meuEscopo() {
    const form = document.querySelector('.formu');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        //console.log(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)
        resultado.innerHTML += `<p> Nome: ${nome.value} sobrenome ${sobrenome.value}, peso ${peso.value}kg, altura${altura.value}M</p></br>`
        
    }
    console.log(pessoas)
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();