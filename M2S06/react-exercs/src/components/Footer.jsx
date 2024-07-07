import './Footer.css'

function Footer() {
    return (
        <footer className='bg-footer'>
            <div className='footer container'>
                <div className='main'>
                    <div className='img-logo'>
                        <img src='https://origamid.com/projetos/bikcraft/img/bikcraft.svg' alt='Bikraft'
                        width="136" height="32" />
                    </div>
                    <div className='contato'>
                        <h3>Contato</h3>
                        <ul>
                            <li>+55 21 9999-9999</li>
                            <li>contato@bikcraft.com</li>
                            <li>Rua Ali Perto, 42 - Botafogo</li>
                            <li>Rio de Janeiro - RJ</li>
                        </ul>
                        <div className='redes'>
                            <a href="#">
                                <img src="./src/assets/instagram.svg" width="32" height="32" alt="Instagram" />
                            </a>
                            <a href="#">
                                <img src="./src/assets/facebook.svg" width="32" height="32" alt="facebook" />
                            </a>
                            <a href="#">
                                <img src="./src/assets/youtube.svg" width="32" height="32" alt="youtube" />
                            </a>
                        </div>
                    </div>
                    <div className='informacoes'>
                        <h3>Informações</h3>
                        <ul>
                            <li>Bicicletas</li>
                            <li>Seguros</li>
                            <li>Contato</li>
                            <li>Termos e Condições</li>
                        </ul>
                    </div>
                </div>
                <p className='footer-copy'>Bikcraft © Alguns direitos reservados.</p>
            </div>            
        </footer>
    )
}

export default Footer