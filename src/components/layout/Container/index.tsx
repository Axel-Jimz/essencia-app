import React from "react";
import { ContainerProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Container: React.FC<ContainerProps> = ({ children, id }) => {
  const classes = ["container"];

  classes.push(id);

  return (
    <div className={classes.join(" ")} id={id}>
      {children}
    </div>
  );
};

export default Container;
