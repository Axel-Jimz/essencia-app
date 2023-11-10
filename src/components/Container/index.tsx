import React from "react";
import { ContainerProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Container: React.FC<ContainerProps> = ({ as, children, id }) => {
  const classes = ["container"];

  as === 'header' && classes.push('header');
  as === 'nav' && classes.push('nav');
  as === 'main' && classes.push('main');
  as === 'aside' && classes.push('aside');
  as === 'footer' && classes.push('footer');

  switch (as) {
    case "header":
      return (
        <header className={classes.join(" ")} id={id}>
          {children}
        </header>
      );
    case "nav":
      return (
        <nav className={classes.join(" ")} id={id}>
          {children}
        </nav>
      );
    case "main":
      return (
        <main className={classes.join(" ")} id={id}>
          {children}
        </main>
      );
    case "aside":
      return (
        <aside className={classes.join(" ")} id={id}>
          {children}
        </aside>
      );
    case "footer":
      return (
        <footer className={classes.join(" ")} id={id}>
          {children}
        </footer>
      );
    default:
      return (
        <div className={classes.join(" ")} id={id}>
          {children}
        </div>
      );
  }
};

export default Container;
