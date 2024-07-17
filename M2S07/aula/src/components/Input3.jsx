import PropTypes from 'prop-types'
import { forwardRef } from 'react'

//export const Input3 = forwardRef((props, ref) => {})
// Desestruturamos para usar label direto e fazer as validações

export const Input3 = forwardRef(({ label, ...rest }, ref) => {
    return (
        <div className='mb-3'>
            {label && <label className='form-label' htmlFor={rest.id}>{label}</label>}
            <input ref={ref} className='form-control' { ...rest } />
        </div>
    )
})

Input3.displayName = "Input3"

Input3.propTypes = {
    label: PropTypes.string,
}