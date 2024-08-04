// Faz parte do arquivo mostrado na aula 2 da semana 10.
// Exemplo de página de edição de objeto. O endpoint desse cara termina com /locals/:id

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from '../../utils/api'
import { useForm } from "react-hook-form";

export function PaginaEditarLocal() {
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm()

    //console.log(params)

    async function onUpdate(data) {
        const response = await api('/locais/' + id, {
            method: 'PUT',
            body: JSON.stringify(data),
        })

        if (response.ok) {
            alert('Local atualizado com sucesso!')
        }
    }

    async function recuperarLocal() {
        const response = await api('/locais/' + id)
        const data = await response.json()

        if (data) {
            reset(data) // Essa função vem do useForm. Se passar sem argumento, ela reseta o formulário. Se passa argumento, ela usa o argumento para setar aquela informação no formulário.
            // console.log(data)
        }
    }

    useEffect(() => {
        if (id) {
            recuperarLocal() //Não precisa passar o ID pra função porque ID já tem escopo acima.
        }
    }, [id])

    return (
        <form onSubmit={handleSubmit(onUpdate)}>
            <input type="text" placeholder="Nome" {...register('nome')} /> <br />
            <textarea
                type="text"
                placeholder="Descrição"
                {...register('descricao')}
            /> <br />
        </form>
    )
}