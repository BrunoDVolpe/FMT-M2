import { useRef } from "react";
import { Input2 } from "./Input2";
import { Input3 } from "./Input3";

export function PadraoForm() {

    const inputRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputRef.current.value)

        //Exemplo de manipulação do elemento sem precisar renderizá-lo novamente (como se fosse um getElementById e manipulasse diretamente o DOM)
        inputRef.current.value = ""
    }

    return (
        <div>
            <div className="container">
                <h1>Testando...</h1>
                <form onSubmit={handleSubmit}>
                    {/* Trocar o inputRef de elemento (nos inputs) para testar o comportamento */}
                    
                    {/* Trabalhar referência dentro do mesmo arquivo funciona. Pego o elemento como se fosse o getElementById */}
                    <input label="test" type="text" />

                    {/* Além de aparecer warning no console, a referência não atravessa de pai para filho */}
                    <Input2 label="Nome2" id="name2" placeholder="Informe seu nome" />
                    
                    {/* Usar forwardRef para passar referência de pai para filho (só filho direto), aí funciona como se pegasse o elemento com getElementById */}
                    <Input3 ref={inputRef} label="Nome3" id="name3" placeholder="Informe seu nome" />
                    <button className="btn btn-primary">Entrar</button>
                </form>
            </div>
        </div>
    )
}