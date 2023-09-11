import * as Yup from "yup";

export const validationSchema = Yup.object({
	name: Yup.string().trim().max(10, "Te pasaste").required("Campo requerido"),
	surname: Yup.string().trim().required("Campo requerido"),
	age: Yup.number()
		.required("Campo requerido")
		.moreThan(18, "Debes ser mayor de edad")
		.lessThan(100, "Debes ser menor de 100 años")
		.integer("Debes ingresar un número entero"),
	email: Yup.string()
		.email("Debes ingresar un email válido")
		.required("Campo requerido"),
});
