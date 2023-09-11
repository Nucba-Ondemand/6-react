import styled from "styled-components";

export const GeneralContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const CardContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;
	background-color: black;
	color: white;
	padding: 1rem;
	border-radius: 1rem;
	width: 300px;
	height: 400px;
`;

export const ImageContainer = styled.div`
	display: flex;
	width: 250px;
	height: 250px;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: start;
	gap: 0.5rem;
`;

export const PokemonName = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0;
`;

export const PokemonNumber = styled.p`
	font-size: 1.25rem;
	font-weight: 400;
`;

export const QueryInput = styled.input`
	width: 50%;
	height: 2rem;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	padding: 0.5rem 2rem;
	font-size: 2rem;
`;

export const QueryButton = styled.button`
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	border: none;
	background-color: black;
	color: white;
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
`;
