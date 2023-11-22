import React from "react";
import { TotalLikesProps } from "./props";
import Paragraph from "../..";
import useTotalLikes from "./hooks/useTotalLikes";

const TotalLikes: React.FC<TotalLikesProps> = ({ postId }) => {
  const { totalLikes } = useTotalLikes(postId)

  let content: string;

  if (totalLikes > 0) {
    content = `${totalLikes} me gusta`;
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
