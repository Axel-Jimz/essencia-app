import React from "react";
import { InputProps } from "./props";
import ErrorIcon from "../../icons/ErrorIcon";


import "./styles/index.css";
import "./styles/theme.css";

const Input: React.FC<InputProps> = ({
  register,
  registerName,
  rules,
  fieldName,
  id,
  placeholder,
  type,
  errors,
  errorDescription,
}) => {
  const classes = ["input"];

  return (
    <label>
      {fieldName && <span>{fieldName}:</span>}
      <input
        className={classes.join(" ")}
        {...register(registerName, rules)}
        name={registerName}
        id={id}
        placeholder={placeholder}
        type={type}
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

export default Input;
