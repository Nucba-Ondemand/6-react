import React, { createContext } from 'react'

const initialState = {
    titulo: 'Titulo en contexto',
    color: 'red',
}

export const Contexto = createContext()

export const ContextoProvider = ({children}) => {
    return (
        <Contexto.Provider value={initialState} >
        {children}
        </Contexto.Provider>
    )
}