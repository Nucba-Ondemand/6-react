
import { Formik } from 'formik';
import React from 'react';
import { formInitialValues } from '../formik/initialValues';
import { validationSchema } from '../formik/validationSchema';
import FormInput from '../UI/FormInput/FormInput';
import SubmitBtn from '../UI/SubmitBtn/SubmitBtn';
import {FormStyled, FormBox, FormSubtitle, FormTitle } from './FormEjemploStyles';



const FormEjemplo = () => {

  return (
  
<FormBox>
        <FormTitle>
            Formulario de ejemplo
        </FormTitle>
        <FormSubtitle>
            Este es un formulario de ejemplo
        </FormSubtitle>
        <Formik
            initialValues={formInitialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm();
            }}
        >
            <FormStyled>
                <FormInput
                    name="name"
                    label="Nombre"
                    type="text"
                />
                <FormInput
                    name="surname"
                    label="Apellido"
                    type="text"
                />
                <FormInput
                    name="age"
                    label="Edad"
                    type="number"
                />
                <FormInput
                    name="email"
                    label="Correo Electronico"
                    type="email"
                />
                <SubmitBtn/>
            </FormStyled>
        </Formik>
       
    </FormBox>
  );
};

export default FormEjemplo;