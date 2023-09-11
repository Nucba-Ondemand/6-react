import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	valor: 0,
};

export const contadorSlice = createSlice({
	name: "contador",
	initialState,
	reducers: {
		sumar: (estado) => {
			estado.valor += 1;
		},
		restar: (estado) => {
			if (estado.valor === 0) {
				return alert("El valor no puede ser negativo");
			}
			estado.valor -= 1;
		},
		resetear: (estado) => {
			estado.valor = 0;
		},
		incrementarPorNumero: (estado, action) => {
			if (isNaN(Number(action.payload))) {
				return alert("El valor ingresado no es un numero");
			}
			if (Number(action.payload) < 0) {
				return alert("El valor ingresado no puede ser negativo");
			}
			estado.valor += Number(action.payload);
		},
	},
});

export const { sumar, restar, resetear, incrementarPorNumero } =
	contadorSlice.actions;

export default contadorSlice.reducer;
