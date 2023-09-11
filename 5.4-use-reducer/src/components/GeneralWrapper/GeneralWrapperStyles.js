import styled from "styled-components";

export const GeneralWrapperStyled = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
`;

export const TitleStyled = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;

export const BtnWrapperStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BtnStyled = styled.button`
	background-color: #fff;
	color: #242424;
	font-size: 1.5rem;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 5px;
	border: none;
	margin: 0 1rem;
	cursor: pointer;
`;
