// O componente sempre terá a estrutura de uma função e o export default dessa função.
// O return será um componente HTML, mas só pode ser uma chave HTML principal com filhas dentro dela.
// Para isso, podemos usar logo depois do return um <> e </> como HTML principal ou já o tipo que queremos,
// exemplo <footer>[conteúdo do componente aqui]</footer>, mas essa tag não será renderizada na tela, só o conteúdo interno.
// O uso do componente da página será como se fosse um elemento novo <Footer></Footer>. Esse componente precisa ser importado
//com import. Exemplo: import Footer from './components/Footer.jsx' (normalmente o Intellisense importa sozinho)
// Outra peculiaridade é o nome das classes. No HTML é class e no React é className
// Yan recomenda sempre testar com um h1 ou h4 pra ver se o componente está sendo carregado
// Base da aula: https://origamid.com/projetos/bikcraft

// CSS
// Para uma estilização global, ou seja, de todos os componentes; podemos colocar em index.css
// Para estilizar um componente, criamos um arquivo com o nome do componente.css e importamos com import no componente
// Exemplo: import './Footer.css'

// Biblioteca de componentes (UI): https://www.radix-ui.com/
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <ul>
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                    <li>Termos e Condições</li>
                </ul>
            </div>
        </>
    )
}

export default Footer