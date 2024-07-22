import { Link } from "react-router-dom"
import './Sidebar.css'

// Link exercício (Projeto Intelbras): https://www.figma.com/design/0Y0SutqjC0IrAXxYWAuWkO/SmartFarm-Intelbras?node-id=38-390&t=uu6KYa1It1V36a7i-1
function Sidebar() {

    return (
        <div className="sidebar">
            <div>
                <h4>Empresa XYZ</h4>
                <div className="upper">
                    <legend>MENU</legend>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/bicicletas'}>Bicicletas</Link>
                </div>
            </div>
            <div>
                <Link to={'/'}>Logout</Link>
            </div>
        </div>
    )
}

export default Sidebar