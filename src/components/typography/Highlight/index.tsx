import React from "react";
import { HighlightProps } from "./props";

// Import the stylesheet.
import "./styles.css";

const Highlight: React.FC<HighlightProps> = ({ children, color }) => {
  const classes = ['highlight'];

  color !== '' && classes.push(`color-${color}`)

  return <span className={classes.join(' ')}>{children}</span>;
};


export default Highlight;
