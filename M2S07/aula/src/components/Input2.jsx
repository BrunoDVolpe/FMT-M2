import PropTypes from 'prop-types'

export function Input2({label, ...rest}) {
    return (
        <div>
            { label && <label htmlFor={rest.id} className='form-label'>{label}</label> }
            <input type="text" className='form-control' {...rest} />
        </div>
    )
}

Input2.propTypes = {
    label: PropTypes.string,
}