import React from 'react'

function AddTenButton(props) {
  const updated = props.letState.cars[0].name
  return <h1>{updated}</h1>

}

export default AddTenButton;