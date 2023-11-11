import React from "react";
import { HeaderProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Header: React.FC<HeaderProps> = ({ children, id }) => {
  const classes = ["header"];

  classes.push(id);

  return (
    <header className={classes.join(" ")} id={id}>
      {children}
    </header>
  );
};

export default Header;
