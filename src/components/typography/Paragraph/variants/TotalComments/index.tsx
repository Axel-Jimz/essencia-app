import React from "react";
import { TotalCommentsProps } from "./props";
import Paragraph from "../..";

const TotalComments: React.FC<TotalCommentsProps> = ({ value }) => {
  let content: string;

  if (value > 0) {
    value === 1
      ? (content = `${value} comentario`)
      : (content = `${value} comentarios`);
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
