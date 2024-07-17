import { useRef } from "react";
import { Input } from "./Input";
import { useEffect } from "react";

export function ComponentsUseRef() {
    // const referencia = useRef(0)
    const inputNameRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputNameRef.current.value) //Equivalente a "event.target.value", estamos pegando o elemento o qual estamos referenciando
        inputNameRef.current.value = "" //Isso vai mudar o valor na DOM sem renderizar novamente o componente
    }

    // useEffect(() => {
    //    console.log("USE REF: ", referencia.current)
    //}, [])

    useEffect(() => {
        if(inputNameRef.current) { //Porque pode acontecer dele vir nulo por questão de tempo de associação da referência
            inputNameRef.current.focus() //Como estamos pegando o elemento, podemos usar recursos javascript, como o focus
        }
    })

    return (
        <div style={{ maxWidth: 250 }}>
            <h1 style={{ fontSize: 18, marginBottom: 32 }}>Componentes useRef</h1>

            <form onSubmit={handleSubmit} className="form-container">
                <input ref={inputNameRef} type="text" placeholder="Informe seu nome" />
                <input type="text" placeholder="Informe seu email" />
                <input type="text" placeholder="Informe sua senha" />

                <Input placeholder="Informe seu nome" value="Testando..." />

                <button>Submit</button>
            </form>
        </div>
    )
}