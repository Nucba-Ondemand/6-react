import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {sumar, restar, resetear, incrementarPorNumero} from '../../slices/contadorSlice'

import { ContadorContainerStyled, TituloStyled, ResultadoStyled, BtnContainerStyled, BtnStyled, InputStyled } from './ContadorStyles'

const Contador = () => {

    const contador = useSelector((state) => state.contador.valor)
    const dispatch = useDispatch()

    const [incrementarPor, setIncrementarPor] = useState(0)

  return (
    <ContadorContainerStyled>
        <TituloStyled>Contador Nucba</TituloStyled>
        <ResultadoStyled>{contador}</ResultadoStyled>
        <BtnContainerStyled>
            <BtnStyled onClick={() => dispatch(restar())} >-</BtnStyled>
            <BtnStyled onClick={() => dispatch(resetear())} >RESET</BtnStyled>
            <BtnStyled onClick={() => dispatch(sumar())} >+</BtnStyled>
        </BtnContainerStyled>
        <InputStyled value={incrementarPor} onChange={(e) => setIncrementarPor(e.target.value)} />
        <BtnStyled onClick={() => dispatch(incrementarPorNumero(incrementarPor))} >ACCION</BtnStyled>
    </ContadorContainerStyled>
  )
}

export default Contador