import React, {useState} from 'react'

import { ContadorContainerStyled, TituloStyled, ResultadoStyled, BtnContainerStyled, BtnStyled } from './ContadorStyles'

const Contador = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter === 0) {
            return
        }
        setCounter(counter - 1)
    }

  return (
    <ContadorContainerStyled>
        <TituloStyled>Contador Nucba</TituloStyled>
        <ResultadoStyled>{counter}</ResultadoStyled>
        <BtnContainerStyled>
            <BtnStyled onClick={restar} >-</BtnStyled>
            <BtnStyled onClick={sumar} >+</BtnStyled>
        </BtnContainerStyled>
    </ContadorContainerStyled>
  )
}

export default Contador