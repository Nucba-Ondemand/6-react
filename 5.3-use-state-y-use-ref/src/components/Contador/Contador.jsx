import React, {useEffect, useRef, useState} from 'react'

import { ContadorContainerStyled, TituloStyled, ResultadoStyled, BtnContainerStyled, BtnStyled } from './ContadorStyles'

const Contador = () => {

    const [counter, setCounter] = useState(0)

    let id = useRef()

    useEffect(() => {
       id.current = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 2000)
        console.log("Renderizando");
    }, [])
    
    const stopIncrement = () => {
        console.log(id);
        clearInterval(id.current)
    }


  return (
    <ContadorContainerStyled>
        <TituloStyled>Contador Nucba</TituloStyled>
        <ResultadoStyled>{counter}</ResultadoStyled>
        <BtnContainerStyled>
            <BtnStyled onClick={stopIncrement} >Stop</BtnStyled>
        </BtnContainerStyled>
    </ContadorContainerStyled>
  )
}

export default Contador