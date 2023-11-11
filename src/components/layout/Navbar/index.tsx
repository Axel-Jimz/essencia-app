import React from "react";
import { NavbarProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Navbar: React.FC<NavbarProps> = ({ children, id }) => {
  const classes = ["navbar"];

  classes.push(id);

  return (
    <nav className={classes.join(" ")} id={id}>
      {children}
    </nav>
  );
};

export default Navbar;
