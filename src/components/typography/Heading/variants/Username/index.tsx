import React from "react";
import { UsernameProps } from "./props";
import Heading from "../..";

const Username: React.FC<UsernameProps> = ({ children }) => {
  return (
    <Heading as="h3" family="montserrat" size="xs" weight="bold" color="black">
      @{children}
    </Heading>
  );
};

export default Username;
