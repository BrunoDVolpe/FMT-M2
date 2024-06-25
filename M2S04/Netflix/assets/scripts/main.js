const episodios = [
    {
        id: 1,
        episodio: 1,
        temporada: 1
    },
    {
        id: 2,
        episodio: 2,
        temporada: 1
    },
    {
        id: 3,
        episodio: 3,
        temporada: 1
    }
]

function listarEpisodios() {
    const listaEpisodios = document.getElementById('lista-episodios')
    listaEpisodios.innerHTML = ""
    for(let i = 0; i < 3; i++) {
        const episodio = episodios[i]
        const episodioDiv = document.createElement('div')
        episodioDiv.classList.add('card-episodio')
        episodioDiv.innerHTML = `<span style="color:black;">Episódio ${episodio.episodio} | Temporada ${episodio.temporada}</span>`
        episodioDiv.setAttribute('onclick', 'iniciarEpisodio(event)')
        //episodioDiv.dataset.add('episodio') = episodio.episodio PROCURAR COMO ADICIONAR E BUSCAR O DATASET PARA PASSAR NO CONSOLE.LOG DE ASSISTIR EPISODIO
        listaEpisodios.appendChild(episodioDiv)
    }
}

function iniciarEpisodio(event) {
    console.log(event)
    //console.log(`Iniciando episódio ${} da temporada ${}`)
    console.log(`Iniciando ${event.target.innerText}`)
}

listarEpisodios()