const botaoAdicionar = document.querySelector("form button")
const inputElement = document.querySelector('input')
const listaElemento = document.querySelector('.list')


const listaInteresses = []

/**
 * @param {Event} event
 */
function marcarElemento(event) {
    event.target.style.textDecoration = "line-through"
}

botaoAdicionar.addEventListener('click', () => {
    const value = inputElement.value
    
    listaInteresses.push(value)


    const itemElemento = document.createElement('li')
    itemElemento.innerText = value
    
    itemElemento.addEventListener('click', marcarElemento)

    listaElemento.appendChild(itemElemento)

    inputElement.value = ""
    // const listaElementosHTML = listaInteresses.map(item => `<li>${item}</li>`)

    // listaElementosHTML.forEach()
    // // console.log(listaElementosHTML)

    // listaElemento.innerHTML = listaElementosHTML.join("")

    // console.log(listaInteresses)
})