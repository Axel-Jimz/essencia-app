import React from "react";
import { SubtitleProps } from "./props";
import Heading from "../..";

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <Heading as="h1" family="montserrat" size="lg" weight="semibold" color="black">
      {children}
    </Heading>
  );
};

export default Subtitle;
