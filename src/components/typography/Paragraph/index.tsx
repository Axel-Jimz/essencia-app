import React from "react";
import { ParagraphProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size,
  weight,
  color,
  style
}) => {
  const classes = ["paragraph"];

  if (size !== '') {
    classes.push(`size-${size}`)
  }

  if (weight !== '') {
    classes.push(`weight-${weight}`)
  }

  if (color !== '') {
    classes.push(`color-${color}`)
  }

  return <p className={classes.join(' ')} style={style} >{children}</p>
};

export default Paragraph;
