import React from "react";
import { HeadingProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Heading: React.FC<HeadingProps> = ({
  children,
  family,
  as,
  size,
  weight,
  color,
}) => {
  const classes = ["heading"];

  family !== '' && classes.push(`family-${family}`)
  size !== '' && classes.push(`size-${size}`)
  weight !== '' && classes.push(`weight-${weight}`)
  color !== '' && classes.push(`color-${color}`)

  switch (as) {
    case "h1":
      return <h1 className={classes.join(" ")}>{children}</h1>;
    case "h2":
      return <h2 className={classes.join(" ")}>{children}</h2>;
    case "h3":
      return <h3 className={classes.join(" ")}>{children}</h3>;
    case "h4":
      return <h4 className={classes.join(" ")}>{children}</h4>;
    case "h5":
      return <h5 className={classes.join(" ")}>{children}</h5>;
    case "h6":
      return <h6 className={classes.join(" ")}>{children}</h6>;
    case "span":
      return <span className={classes.join(" ")}>{children}</span>;
    default:
      return <span className={classes.join(" ")}>{children}</span>;
  }
};

export default Heading;
