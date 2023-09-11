import React, { useEffect, useState } from 'react'
import { GeneralContainer, CardContainerStyled, DataContainer, ImageContainer, PokemonName, PokemonNumber, QueryInput, QueryButton } from './PokeAppStyles'

import axios from 'axios'

import { useGetPokemon } from '../../CustomHooks/useGetPokemon'

const PokeApp = () => {

    //Agregar cuando se implemente Axios
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    //Agregar desde el inicio
    // const [query, setQuery] = useState(1)
    // const [pokemon, setPokemon] = useState({})

    //Ejemplo con Custom Hook
    const [query, setQuery] = useState(1)
    const { pokemon, loading, error, getPokemon } = useGetPokemon()

    //Ejemplo con fetch
    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/1')
    //         .then(response => response.json())
    //         .then(data => setPokemon(data))
    //         .catch(error => console.log(error))
    // }, [])

    // console.log(pokemon);

    //Ejemplo con Axios
    // const getPokemon = async () => {
    //     setPokemon(null)
    //     setLoading(true)
    //     try {
    //         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
    //         setLoading(false)
    //         setError(null)
    //         setPokemon(data)
    //     } catch (error) {
    //         setLoading(false)
    //         setError(error)
    //     }
    // }
    // useEffect(() => {
    //     getPokemon()
    // }, [])

    //Ejemplo con Custom Hook

    useEffect(() => {
        getPokemon(query)
    }, [])

  return (
    //APP CON FETCH
    // <GeneralContainer>
    //     <CardContainerStyled>
    //         <ImageContainer><img src={pokemon?.sprites?.other?.home?.front_default} alt="" /></ImageContainer>
    //         <DataContainer>
    //             <PokemonName>{pokemon?.name?.toUpperCase()}</PokemonName>
    //             <PokemonNumber>Número: {pokemon?.id}</PokemonNumber>
    //         </DataContainer>
    //     </CardContainerStyled>
    // </GeneralContainer>

    //APP CON AXIOS Y CUSTOM HOOK
    <GeneralContainer>
        {
            loading && <p>Cargando...</p>
        }
        {
            error && <p>{error}</p>
        }
        {
            pokemon && <CardContainerStyled>
            <ImageContainer><img src={pokemon?.sprites?.other?.home?.front_default} alt="" /></ImageContainer>
            <DataContainer>
                <PokemonName>{pokemon?.name?.toUpperCase()}</PokemonName>
                <PokemonNumber>Número: {pokemon?.id}</PokemonNumber>
            </DataContainer>
        </CardContainerStyled>
        }
        <QueryInput value={query} onChange={(e) => setQuery(e.target.value)} />
        <QueryButton onClick={() => getPokemon(query)} >Buscar</QueryButton>
    </GeneralContainer>
    
  )
}

export default PokeApp