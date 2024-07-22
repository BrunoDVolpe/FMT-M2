import { Link } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"

function Bicicletas() {
    return (
        <>
            <Sidebar />
            <h1>Bicicletas</h1>
            <Link to={'/'}>Home</Link>
        </>
    )
}

export default Bicicletas