const iniciarPrompt = () => {
    let nome = window.prompt("Qual o seu nome?")
    
    if(!nome) {
        window.alert("O nome é necessário!")
        return
    }

    let desejaContinuar = window.confirm("Deseja continuar?")
    
    if(desejaContinuar) {
        window.alert("Certo, vamos continuar...")
    } else {
        window.alert("Ok, até logo!")
    }
}