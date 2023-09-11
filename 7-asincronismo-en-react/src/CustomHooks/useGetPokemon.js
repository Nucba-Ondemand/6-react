import { useState } from "react";
import axios from "axios";

export const useGetPokemon = () => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getPokemon = async (query) => {
		setPokemon(null);
		setLoading(true);
		try {
			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${query}`
			);
			setError(false);
			setPokemon(data);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	return { pokemon, loading, error, getPokemon };
};
