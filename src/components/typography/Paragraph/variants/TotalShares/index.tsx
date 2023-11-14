import React from "react";
import { TotalSharesProps } from "./props";
import Paragraph from "../..";

const TotalShares: React.FC<TotalSharesProps> = ({ value }) => {
  let content: string;

  if (value > 0) {
    value === 1
      ? (content = `${value} vez compartido`)
      : (content = `${value} veces compartido`);
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
