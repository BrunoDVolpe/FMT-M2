import { useEffect, useState } from "react"
import CardBike from "../components/CardBike"
//import { comprarBike } from "../services/bikes"

function Bicicletas() {

    const bikesOriginal = [
        {
          id: 0,
          categoria: 'A',
          modelo: "Magic Might",
          preco: "2.499,00",
          imgSrc: "https://origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"
        },
        {
          id: 1,
          categoria: 'A',
          modelo: "Nimbus Stark",
          preco: "4.999,00",
          imgSrc: "https://origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"
        },
        {
          id: 2,
          categoria: 'C',
          modelo: "Nebula Cosmic",
          preco: "3.999,00",
          imgSrc: "https://origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg"
        }
    ]

    const [bikes, setBikes] = useState(bikesOriginal)
    const [filtro, setFiltro] = useState('T')
    
    function mudarCategoria(categoria) {
        setFiltro(categoria)
    }

    const comprarBike = () => {
        console.log('Comprando a bike pelo Bicicletas.jsx')
    }
    // Se usasse function comprarBike() {...}, em CardBike, no onClick, usaria {() => comprarBike()}

    useEffect(() => {
        if (filtro === 'T') {
            setBikes(bikesOriginal)
        } else {
            let bikesFiltradas = bikesOriginal.filter(bike => bike.categoria === filtro)
            setBikes(bikesFiltradas)
        }
    }, [filtro])

    return (
        <>
            <h1>Bicicletas</h1>
            <span>Categoria Aplicada: {filtro}</span>
            <div className="row justify-center">
                <button onClick={() => mudarCategoria('T')}>Mostrar todas</button>
                <button onClick={() => mudarCategoria('A')}>Categoria A</button>
                <button onClick={() => mudarCategoria('B')}>Categoria B</button>
                <button onClick={() => mudarCategoria('C')}>Categoria C</button>
            </div>
            <div className="row list">
                {bikes.map(bike =>
                    <CardBike key={bike.id} imagemSrc={bike.imgSrc} modelo={bike.modelo} preco={bike.preco}
                    comprarBike={comprarBike} />
                )}
            </div>
        </>
    )
}

export default Bicicletas