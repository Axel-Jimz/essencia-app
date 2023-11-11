import React from "react";
import { AsideProps } from "./props";

import "./styles/index.css";

const Aside: React.FC<AsideProps> = ({ children, id }) => {
  const classes = ["aside"];

  return (
    <aside className={classes.join(" ")} id={id}>
      <div>
        {children}
      </div>
    </aside>
  );
};

export default Aside;
