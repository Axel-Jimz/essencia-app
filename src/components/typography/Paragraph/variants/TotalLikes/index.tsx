import React from "react";
import { TotalLikesProps } from "./props";
import Paragraph from "../..";

const TotalLikes: React.FC<TotalLikesProps> = ({ value }) => {
  let content: string;

  if (value > 0) {
    content = `${value} me gusta`;
  } else {
    content = "";
  }

  return (
    <Paragraph size="xs" weight="regular" color="black">
      {content}
    </Paragraph>
  );
};

export default TotalLikes;
