function mudarEstilo() {
    const pes = document.querySelector('#paragrafos');
    const pesDeDentro = pes.querySelectorAll('p');
    const estiloBody = getComputedStyle(document.body);
    const corDeFundo = estiloBody.backgroundColor;

    console.log(corDeFundo)

    for (let p of pesDeDentro) {
        p.style.backgroundColor = '#987284';
        p.style.color = '#fff'
    }
}