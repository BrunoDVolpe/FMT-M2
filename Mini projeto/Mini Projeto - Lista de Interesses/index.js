/** Implemente seu código abaixo. Boa sorte! */
const btnAdicionar = document.querySelector('.form .button-add')
const btnLimpar = document.querySelector('.list .button-clear')

// Exercício 1 - Buscar os interesses do storage e atualizar a lista de interesses
function renderListMeusInteresses() {
    const meusInteressesStorage = localStorage.getItem('meus-interesses')
    const listaInteressesHTML = document.querySelector('.list ul')

    listaInteressesHTML.innerHTML = ""

    if(meusInteressesStorage) {
        const meusInteressesList = JSON.parse(meusInteressesStorage)

        meusInteressesList.forEach(interesse => {
            const interesseItem = document.createElement('li')
            interesseItem.innerHTML = interesse

            listaInteressesHTML.appendChild(interesseItem)
        });
    }
}

// Exercício 2 - Adicionar evento de clique no botão de interesse
btnAdicionar.addEventListener('click', () => {
    const novoInteresseInput = document.querySelector('.form input')
    const novoInteresse = novoInteresseInput.value
    
    const meusInteressesStorage = localStorage.getItem('meus-interesses')
    if(meusInteressesStorage) {
        const meusInteressesList = JSON.parse(meusInteressesStorage)
        meusInteressesList.push(novoInteresse)
        localStorage.setItem('meus-interesses', JSON.stringify(meusInteressesList))
    } else {
        novaLista = [novoInteresse]
        localStorage.setItem('meus-interesses', JSON.stringify(novaLista))
    }

    novoInteresseInput.value = ''
    renderListMeusInteresses()
})

// Exercício 3 - Atualizar a lista a cada 1 segundo para manter atualizado
setInterval(renderListMeusInteresses, 1000)

// Exercício 4 - Limpar lista de interesses no storage e na tela
btnLimpar.addEventListener('click', () => {
    localStorage.removeItem(['meus-interesses'])
    const novoInteresseInput = document.querySelector('.form input')
    novoInteresseInput.value = ''
    renderListMeusInteresses()
})

// Exercício 5 - Buscar a primeira notícia do dia / Exercício 6 - Inserir notícia na seção 'patrocinado'
const buscarNoticia = async () => {
    const patrocinadoHTML = document.querySelector('.title-news-today')
    try {
        const resposta = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        const data = await resposta.json()
        const noticia = data.items[0] //Primeira notícia
        patrocinadoHTML.innerHTML = noticia.titulo
    } catch (err) {
        console.log('Erro ao pegar notícia: ', err)
        patrocinadoHTML.innerHTML = "Erro ao carregar."
    }
}
buscarNoticia()