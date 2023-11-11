import React from "react";
import { MainProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Main: React.FC<MainProps> = ({ children, id }) => {
  const classes = ["main"];

  classes.push(id);

  return (
    <main className={classes.join(" ")} id={id}>
      {children}
    </main>
  );
};

export default Main;
