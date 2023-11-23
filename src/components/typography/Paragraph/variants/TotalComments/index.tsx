import React from "react";
import { TotalCommentsProps } from "./props";
import useTotalComments from "./hooks/useTotalComments";
import Paragraph from "../..";

const TotalComments: React.FC<TotalCommentsProps> = ({ postId }) => {
  const { totalComments } = useTotalComments(postId);

  let content: string;

  if (totalComments > 0) {
    totalComments === 1
      ? (content = `${totalComments} comentario`)
      : (content = `${totalComments} comentarios`);
  } else {
    content = "";
  }

  return (
    <Paragraph size="xs" weight="regular" color="black">
      {content}
    </Paragraph>
  );
};

export default TotalComments;
