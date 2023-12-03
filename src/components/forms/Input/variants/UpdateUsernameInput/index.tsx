import React from 'react';
import Input from '../..';

import { UseFormRegister } from "react-hook-form";

import "./styles/index.css";

export interface UpdateUsernameInputProps {
  register: UseFormRegister<any>;
  rules: Record<string, any>;
  errors: any;
}

const UpdateUsernameInput: React.FC<UpdateUsernameInputProps> = ({  register, rules, errors }) => {
  return (
    <Input 
        register={register}
        registerName='username'
        rules={rules}
        fieldName='Nombre de usuario'
        placeholder='Nombre de usuario'
        type='text'
        errors={errors}
        errorDescription='El nombre de usuario debe tener entre 5 y 20 caracteres y comenzar
        con una letra. Solo puede contener letras, números y guiones bajos.'
        id='update-username'
    />
  );
};

export default UpdateUsernameInput;