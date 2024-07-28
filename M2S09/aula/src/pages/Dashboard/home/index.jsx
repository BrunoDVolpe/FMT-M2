import { useContador } from "../../../contexts/Contador"

function Home2() {
    const { contador, incrementar, decrementar } = useContador()
    
    return (
        <>
            <h1>Dashboard home page</h1>
            
            <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>

            <span className="badge text-bg-secondary">{contador}</span>
            
            <button className="btn btn-success" onClick={incrementar}>Incrementar</button>
        </>
    )
}

export default Home2