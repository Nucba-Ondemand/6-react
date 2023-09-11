import styled from "styled-components";

export const H1Styled = styled.h1`
	color: palevioletred;
	font-size: 2rem;
	text-align: center;
`;

export const PStyled = styled.p`
	color: steelblue;
	font-size: 1.5rem;
	font-weight: 700;
`;

export const ButtonStyled = styled.button`
	color: white;
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "slateblue")};
	font-size: 1rem;
	font-weight: 700;
	padding: 1rem;
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
`;
