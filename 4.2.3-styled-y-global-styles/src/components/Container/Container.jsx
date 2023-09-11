import React from 'react'
import styled from 'styled-components'

import {
    H1Styled,
    PStyled,
    ButtonStyled
} from './ContainerStyles'

const ContainerStyled = styled.div`
    background-color: #242424;
    color: #fafafa;
    padding: 1.5em;
    height: 100vh;
    & h4 {
        font-size: 1.5em;
        &:hover {
            color: steelblue
        }
    }
`
const Container = () => {

  return (
    <ContainerStyled>
        <H1Styled>Soy el h1</H1Styled>
        <h4>Soy el h4</h4>
        <PStyled>Soy el p</PStyled>
        <ButtonStyled bgColor={""} >Soy el button</ButtonStyled>
    </ContainerStyled>
  )
}

export default Container