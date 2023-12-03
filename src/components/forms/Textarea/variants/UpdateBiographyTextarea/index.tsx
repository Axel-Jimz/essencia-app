import React from "react";
import { UpdateBiographyTextareaProps } from "./props";
import Textarea from "../..";

import "./styles/index.css";

const UpdateBiographyTextarea: React.FC<UpdateBiographyTextareaProps> = ({
  register,
  rules,
  errors,
}) => {
  return (
    <Textarea
      register={register}
      registerName="biography"
      rules={rules}
      fieldName="Biografía"
      errors={errors}
      errorDescription="La biografía debe tener entre 10 y 80 caracteres y solo puede
      contener letras, números, espacios en blanco y los caracteres .,!?_-."
      placeholder="Escribe una biografía"
      id="biography"
    />
  );
};

export default UpdateBiographyTextarea;
