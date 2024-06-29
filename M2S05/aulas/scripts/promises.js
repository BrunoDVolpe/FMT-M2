const success = true

new Promise((resolve, reject) => {
    // if(success) {
    //     resolve("Tudo certo, segue o fluxo!")
    // }
    // reject("Deu ruim, corre!")
    setTimeout(() => resolve("Seus dados estão aqui!"), 2000)
})
.then(resposta => {
    console.log(resposta)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    console.log("Finalizou todo o processo.")
})

// Exemplo com async await (revisão na próxima aula), try catch e passagem de objeto por Promise
const dados = {
    nome: 'Aurora',
    idade: 36
}

async function chamarDados() {
    try {
        const resposta = await new Promise((resolve, reject) => {
            setTimeout(() => reject(dados), 2000)
        })
        console.log(resposta)

    } catch(err) {
        console.log("Erro: ", err)
    }
}
chamarDados()