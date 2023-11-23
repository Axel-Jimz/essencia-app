import { UseFormRegister } from "react-hook-form";

export interface PostContentTextareaProps {
  register: UseFormRegister<any>;
  rules: Record<string, any>;
}
