import React from "react";
import { CommentContentTextareaProps } from "./props";
import Textarea from "../..";

import "./styles/index.css";

const CommentContentTextarea: React.FC<CommentContentTextareaProps> = ({
  register,
  rules,
}) => {
  return (
    <Textarea
      register={register}
      registerName="commentContent"
      rules={rules}
      placeholder="Escribe un comentario"
      id="comment-content"
    />
  );
};

export default CommentContentTextarea;
