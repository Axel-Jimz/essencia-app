import React from "react";
import { TitleProps } from "./props";
import Heading from "../..";

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Heading as="h1" family="montserrat" size="xl" weight="extrabold" color="black">
      {children}
    </Heading>
  );
};

export default Title;
