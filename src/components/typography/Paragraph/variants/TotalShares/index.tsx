import React from "react";
import { TotalSharesProps } from "./props";
import Paragraph from "../..";
import useTotalShares from "./hooks/useTotalShares";

const TotalShares: React.FC<TotalSharesProps> = ({ postId }) => {
  const { totalShares } = useTotalShares(postId);

  let content: string;

  if (totalShares > 0) {
    totalShares === 1
      ? (content = `${totalShares} vez compartido`)
      : (content = `${totalShares} veces compartido`);
  } else {
    content = "";
  }

  return (
    <Paragraph size="xs" weight="regular" color="black">
      {content}
    </Paragraph>
  );
};

export default TotalShares;
