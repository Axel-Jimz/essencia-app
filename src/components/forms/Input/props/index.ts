import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface InputProps {
  register: UseFormRegister<any>;
  registerName: string;
  rules?: Record<string, any>;
  fieldName?: string;
  id: string;
  placeholder: string;
  type: "text" | "password" | "email" | "number";
  errors?: FieldErrors<any>; 
  errorDescription?: string;
}
