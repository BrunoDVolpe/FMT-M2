document.addEventListener("DOMContentLoaded", () => {

    const listaTarefas = document.querySelector(".list")
    const botaoAdicionar = document.querySelector("button")
    const tarefas = []

    const adicionarTarefa = (evento) => {
        const tarefaInput = document.querySelector("input[name='tarefa']")
        const tarefa = tarefaInput.value
        if(tarefa.trim()) {
            tarefas.push(tarefa)
            const novoItem = document.createElement('li')
            novoItem.innerHTML = `<input type="checkbox" id="tarefa${tarefas.length}" name="tarefa${tarefas.length}" value="${tarefa}">
                                <label for="tarefa${tarefas.length}"> ${tarefa}</label><br>`
            novoItem.addEventListener('click', alterarStatusTarefa)
            listaTarefas.appendChild(novoItem)
        }
        tarefaInput.value = ""
    }

    botaoAdicionar.addEventListener('click', adicionarTarefa)
    // OU, poderíamos escrever direto na função:
    //botaoAdicionar.addEventListener('click', (evento) => {...})

    function alterarStatusTarefa(evento) {
        evento.target.classList.toggle('taskDone')
    }
    //Se o input estiver marcado, a tarefa precisa estar riscada
    //elemento.classList.remove('classe')
    //elemento.classList.add('classe')
    //elemento.classList.toggle('classe') para colocar ou remover a classe caso tenha ou não tenha ela
})