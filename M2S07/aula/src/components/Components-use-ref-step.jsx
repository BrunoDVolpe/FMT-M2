import { useRef } from "react";
// import { Input } from "./Input";
import { useEffect } from "react";
import { useState } from "react";

export function ComponentsUseRefStep() {

    const [step, setStep] = useState(1)
    const inputNameRef = useRef(null)
    const inputAddressRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputNameRef.current.value) //Equivalente a "event.target.value", estamos pegando o elemento o qual estamos referenciando
        inputNameRef.current.value = "" //Isso vai mudar o valor na DOM sem renderizar novamente o componente
    }

    useEffect(() => {
        if(step == 1 && inputNameRef.current) {
            inputNameRef.current.focus()
        }
        if(step == 2 && inputAddressRef.current) {
            inputAddressRef.current.focus()
        }
    }, [step])

    return (
        <div style={{ maxWidth: 250 }}>
            { step == 1 && <strong style={{ display: 'block', marginBottom: 32 }}>1º Passo</strong> }
            { step == 2 && <strong style={{ display: 'block', marginBottom: 32 }}>2º Passo</strong> }

            <form onSubmit={handleSubmit} className="form-container">
                { step == 1 && (
                    <>
                        <input ref={inputNameRef} type="text" placeholder="Informe seu nome" />
                        <input type="text" placeholder="Informe seu email" />
                    </>
                ) }

                { step == 2 && (
                    <input ref={inputAddressRef} type="text" placeholder="Informe seu endereço" />
                ) }

                {/* <Input placeholder="Informe seu nome" value="Testando..." /> */}

            </form>
            <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                <button onClick={() => setStep((prevState) => prevState - 1)}>Voltar</button>
                <button onClick={() => setStep((prevState) => prevState + 1)}>Próximo</button>
            </div>
        </div>
    )
}