import { useEffect } from "react"
import { useState } from "react"
import "./ApiIbge.css"

export function ApiIbge() {
    async function getNews() {
        try {
            const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/')
            const data = await response.json()
            const news = data['items'][0]
            setNoticia(news)
        } catch(err) {
            console.log(err)
        }
    }

    const [noticia, setNoticia] = useState('')
    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <div className="ex2 container">
                <h1 className="ex2">{noticia.titulo}</h1>
                <span>Data da notícia: {noticia.data_publicacao}</span>
            </div>
        </>
    )
}