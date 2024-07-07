import './CardBike.css'

function CardBike({ modelo, preco, imagemSrc, comprarBike }) {
    // function comprarBike() {
    //     console.log('Comprando a bike')
    // }
    // const comprarBike = () => {
    //     console.log('Comprando a bike')
    // }

    return (
        <>
            <div className="card-bike">
                {/* If dentro do HTML - ternário - com variável de controle */}
                {/* {controle === 'tal coisa' ? <>Dentro da condição</> : <>Fora da condição</>} */}

                <img className="img-bike" src={imagemSrc} alt="Foto da bicicleta"></img>
                <h3 className="titulo-bike">{modelo}</h3>
                <h4 className="valor-bike">R$ {preco}</h4>
                {/* <button onClick={() => comprarBike()}>Comprar</button> */}
                <button onClick={comprarBike}>Comprar</button>
            </div>
        </>
    )
}

export default CardBike