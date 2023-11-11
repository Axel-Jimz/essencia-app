import React from "react";
import { FooterProps } from "./props";

import "./styles/index.css";

const Footer: React.FC<FooterProps> = ({ children, id }) => {
  const classes = ["footer"];

  return (
    <footer className={classes.join(" ")} id={id}>
      <div>
        {children}
      </div>
    </footer>
  );
};

export default Footer;
