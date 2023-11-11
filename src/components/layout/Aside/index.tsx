import React from "react";
import { AsideProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Aside: React.FC<AsideProps> = ({ children, id }) => {
  const classes = ["aside"];

  classes.push(id);

  return (
    <aside className={classes.join(" ")} id={id}>
      {children}
    </aside>
  );
};

export default Aside;
