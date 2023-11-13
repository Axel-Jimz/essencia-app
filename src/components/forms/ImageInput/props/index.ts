import { UseFormRegister } from "react-hook-form";

export interface ImageInputProps {
  register: UseFormRegister<any>;
  registerName: string;
  fieldName?: string;
  id: string;
  resetImageInput: boolean;
  setResetImageInput: any;
}
