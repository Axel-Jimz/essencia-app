import React from 'react';
import { FormProps } from "./props"
import { useForm } from 'react-hook-form';

import "./styles/index.css";
import "./styles/theme.css";

const Form: React.FC<FormProps> = ({ children, id, onSubmit}) => {
  const { handleSubmit } = useForm();

  const classes = ['form'];

  return (
    <form className={classes.join(' ')} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" id={id}>
      {children}
    </form>
  );
};

export default Form;
