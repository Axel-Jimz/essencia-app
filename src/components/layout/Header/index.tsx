import React from "react";
import { HeaderProps } from "./props";

import "./styles/index.css";

const Header: React.FC<HeaderProps> = ({ children, id }) => {
  const classes = ["header"];

  return (
    <header className={classes.join(" ")} id={id}>
      <div>
        {children}
      </div>
    </header>
  );
};

export default Header;
