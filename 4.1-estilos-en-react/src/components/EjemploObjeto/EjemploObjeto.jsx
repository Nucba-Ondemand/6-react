import React from 'react'

const EjemploObjeto = () => {

    let estiloParrafo = {
        color: 'steelblue',
        fontSize: '2em',
        fontWeight: 'bold',
        paddingLeft: '1em',
    }

  return (
    <p style={estiloParrafo} >Soy un ejemplo de estilos en objeto</p>
  )
}

export default EjemploObjeto