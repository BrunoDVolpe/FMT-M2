import { Link } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"

function Home() {

    return (
        <>
            <Sidebar />
            <h1>Home</h1>
            {/* <a href="/bicicletas.html">Bicicletas</a> -> Não usa mais para páginas internas*/}
            {/* <a href="link_externo" target="_blank">Externo</a> -> Para link externo continua usando */}
            <Link to={'/bicicletas'}>Bicicletas</Link>
        </>
    )
}

export default Home