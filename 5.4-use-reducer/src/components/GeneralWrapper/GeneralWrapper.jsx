import React, { useReducer } from 'react'

import {
    GeneralWrapperStyled,
    TitleStyled,
    BtnWrapperStyled,
    BtnStyled
} from './GeneralWrapperStyles'

const GeneralWrapper = () => {

    const initialState = '';

    const reducer = (state, action) => {
        switch (action.type) {
            case 'rojo':
                return 'red';
            case 'azul':
                return 'blue';
            case 'verde':
                return 'green';
            default:
                return state;
        }
    }

    const [estado, dispatch] = useReducer(reducer, initialState)

  return (
    <GeneralWrapperStyled>
        <TitleStyled style={{color: estado}} >Mi título</TitleStyled>
        <BtnWrapperStyled>
            <BtnStyled onClick={() => dispatch({type: 'rojo'})} >Rojo</BtnStyled>
            <BtnStyled onClick={() => dispatch({type: 'azul'})} >Azul</BtnStyled>
            <BtnStyled onClick={() => dispatch({type: 'verde'})} >Verde</BtnStyled>
        </BtnWrapperStyled>
    </GeneralWrapperStyled>
  )
}

export default GeneralWrapper