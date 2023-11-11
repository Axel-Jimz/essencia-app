import React from "react";
import { MainProps } from "./props";

import "./styles/index.css";

const Main: React.FC<MainProps> = ({ children, id }) => {
  const classes = ["main"];

  return (
    <main className={classes.join(" ")} id={id}>
      <div>
        {children}
      </div>
    </main>
  );
};

export default Main;
