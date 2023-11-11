import React from "react";
import { FooterProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Footer: React.FC<FooterProps> = ({ children, id }) => {
  const classes = ["footer"];

  classes.push(id);

  return (
    <footer className={classes.join(" ")} id={id}>
      {children}
    </footer>
  );
};

export default Footer;
