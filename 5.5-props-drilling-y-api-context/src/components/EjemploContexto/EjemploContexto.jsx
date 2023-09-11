import React, { useContext } from 'react'
import { TituloContextoStyled } from './EjemploContextoStyles'

import { Contexto } from '../../MiContexto/MiContexto'

const EjemploContexto = () => {

    const {titulo, color} = useContext(Contexto)
  

  return (
    <TituloContextoStyled style={{color: color}} >{titulo}</TituloContextoStyled>
  )
}

export default EjemploContexto