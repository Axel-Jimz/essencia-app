import React from "react";
import { PostContentTextareaProps } from "./props";
import Textarea from "../..";

import "./styles/index.css";

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
