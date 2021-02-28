function criarHoras(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}



const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criarHoras(segundos)
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.style.color = 'black';
        iniciaRelogio();
    }
    if (el.classList.contains("pausar")) {
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    if (el.classList.contains("zerar")) {
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'black';
    }
})

