const inputElemento = document.querySelector('input')
const buttonElemento = document.querySelector("form button")
const listaElemento = document.querySelector('.list')


const listaInteresses = []

/**
 * @param {MouseEvent} event - isso é um evento de clique (exemplo de descrição - não obrigatório)
 */
function lidarAoClicarNoItem(event) {
    const elementoAtual = event.target
    const interesseId = elementoAtual.dataset.interesseId
    const inputCheckElemento = elementoAtual.querySelector('input')

    inputCheckElemento.setAttribute('checked', 'true')

    listaInteresses.map(item => {
        if(item.id == interesseId) {
            return {
                ...item,
                checked: true,
            }
        } else {
            return item
        }
    })
    elementoAtual.classList.add('riscado')
}
//lidarAoClicarNoItem() // Com ajuda do JSDoc, que é o comentário acima da função lidarAoClicarNoItem, o VSCode entende o tipo de
// parâmetro que a função recebe. Se descomentar a função e colocar o cursor no parâmetro da função, ele vai sugerir
// o tipo do parâmetro e eventuais sugestões de métodos. Sem o JSDoc, ele não saberia o tipo de parâmetro e apareceria "any".

/** Registrar os eventos */
buttonElemento.addEventListener('click', () => {
    const valorInput = inputElemento.value

    if(valorInput) {
        const itemData = {
            id: Date.now(), // apenas para aplicar um identificador único
            name: valorInput,
            checked: false
        }
        const itemElemento = document.createElement('li')
        const checkElemento = document.createElement('input')
        checkElemento.type = "checkbox"

        itemElemento.innerText = valorInput
        itemElemento.dataset.interesseId = itemData.id
        // Dataset permite criarmos um atributo personalizado para nossos elementos. Neste caso um Id que nos permite identificar
        // interesses com o mesmo nome, distinguindo eles pelo id do dataset.
        // Podemos criar pelo backend, usando elemento.dataset.{nome do atributo em camelCase} e ele será colocado no elemento como
        // data-{nome do atributo com tudo em minúsculo e separando o camelCase com '-'}. Exemplo: <li data-nome-atributo="(valor)">
        // Ou colocamos no elemento como <li data-nome-do-elemento="valor_do_atributo"> e no backend será acessado como
        // elemento.dataset.{nome do elemento em camelCase e sem a palavra data}, exemplo elemento.dataset.nomeDoElemento
        itemElemento.prepend(checkElemento)

        itemElemento.addEventListener('click', lidarAoClicarNoItem)
        // listaElemento.prepend(itemElemento) // incluir como primeiro filho
        listaElemento.appendChild(itemElemento) // incluir como último filho
        
        listaInteresses.push(itemData)

        inputElemento.value = ""
    } else {
        alert('Informar interesse.')
    }
})