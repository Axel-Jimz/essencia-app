import React from "react";
import { CalloutProps } from "./props";
import Heading from "../..";

const Callout: React.FC<CalloutProps> = ({ children }) => {
  return (
    <Heading as="h1" family="montserrat" size="xs" weight="semibold" color="black">
      {children}
    </Heading>
  );
};

export default Callout;
