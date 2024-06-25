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
        episodioDiv.dataset.episodioId = episodio.id
        episodioDiv.dataset.episodioEpisodio = episodio.episodio
        episodioDiv.dataset.episodioTemporada = episodio.temporada
        listaEpisodios.appendChild(episodioDiv)
    }
}

function iniciarEpisodio(event) {
    const episodio = event.target.dataset.episodioEpisodio
    const temporada = event.target.dataset.episodioTemporada
    console.log(`Iniciando episódio ${episodio} da temporada ${temporada}`)
}

listarEpisodios()