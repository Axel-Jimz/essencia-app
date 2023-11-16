import React from "react";
import { UseFormRegister } from "react-hook-form";
import Textarea from "../..";

import "./styles/index.css";

export interface PostContentTextareaProps {
  register: UseFormRegister<any>;
  rules: Record<string, any>;
}

const PostContentTextarea: React.FC<PostContentTextareaProps> = ({
  register,
  rules,
}) => {
  return (
    <Textarea
      register={register}
      registerName="postContent"
      rules={rules}
      placeholder="¿Qué estas pensando?"
      id="post-content"
    />
  );
};

export default PostContentTextarea;
