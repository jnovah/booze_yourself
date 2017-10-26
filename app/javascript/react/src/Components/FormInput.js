import React from 'react'

const FormInput = props => {
  return(
    <label htmlFor={props.name}>{props.label}
      <input type="text" id={props.name} name={props.name} onChange={props.handleChange} value={props.value} />
    </label>
  )
}

export default FormInput
