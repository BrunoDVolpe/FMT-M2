import './Header.css'

function Header() {
    return (
        <>
            <div className='header'>
                <img src='https://origamid.com/projetos/bikcraft/img/bikcraft.svg' alt='Bikraft' />
                <div className='nav'>
                    <a href="#"><span>Bicicletas</span></a>
                    <a href="#"><span>Seguros</span></a>
                    <a href="#"><span>Contato</span></a>
                </div>
            </div>
        </>
    )
}

export default Header