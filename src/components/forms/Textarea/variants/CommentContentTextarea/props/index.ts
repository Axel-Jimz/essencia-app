import { UseFormRegister } from "react-hook-form";

export interface CommentContentTextareaProps {
  register: UseFormRegister<any>;
  rules: Record<string, any>;
}
