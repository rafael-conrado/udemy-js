const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(params) {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value)

    }
})

function criarTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)

});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus()
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    //botaoApagar.classList.add('apagar")
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);//converter para json
    localStorage.setItem('tarefas',tarefasJSON)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //converter para array

    for (let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas()