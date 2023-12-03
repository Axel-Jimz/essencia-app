import { UseFormRegister } from "react-hook-form";

export interface UpdateBiographyTextareaProps {
  register: UseFormRegister<any>;
  rules: Record<string, any>;
  errors: any;
}
