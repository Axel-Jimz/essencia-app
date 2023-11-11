import React from "react";
import { NavbarProps } from "./props";

import "./styles/index.css";

const Navbar: React.FC<NavbarProps> = ({ children, id }) => {
  const classes = ["navbar"];

  classes.push(id);

  return (
    <nav className={classes.join(" ")} id={id}>
      <div>
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
