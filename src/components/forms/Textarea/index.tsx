import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import ErrorIcon from "../../icons/ErrorIcon";

import "./styles/index.css";
import "./styles/theme.css";

interface TextareaProps {
  register: UseFormRegister<any>;
  registerName: string;
  rules?: Record<string, any>;
  fieldName?: string;
  id: string;
  placeholder: string;
  errors?: FieldErrors<any>;
  errorDescription?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  register,
  registerName,
  rules,
  fieldName,
  id,
  placeholder,
  errors,
  errorDescription,
}) => {
  const classes = ["textarea"];

  return (
    <label>
      {fieldName && <span>{fieldName}:</span>}
      <textarea
        className={classes.join(" ")}
        {...register(registerName, rules)}
        name={registerName}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
      />
      {errors &&
        errors[registerName] &&
        typeof errors[registerName] !== "undefined" && (
          <div className="error-description">
            <div>
              <ErrorIcon />
            </div>
            {errorDescription}
          </div>
        )}
    </label>
  );
};

export default Textarea;
