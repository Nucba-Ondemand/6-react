import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../slices/contadorSlice";

export const store = configureStore({
	reducer: {
		contador: contadorReducer,
	},
});
