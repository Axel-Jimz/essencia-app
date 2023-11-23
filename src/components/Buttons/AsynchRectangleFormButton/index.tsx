import React from "react";
import { AsynchRectangleFormButtonProps } from "./props";
import LoadingIcon from "../../icons/LoadingIcon";

import "./styles/index.css";
import "./styles/theme.css";

const AsynchRectangleFormButton: React.FC<AsynchRectangleFormButtonProps> = ({
  children,
  icon,
  isSubmitting,
  tooltipMessage,
  bg,
  bgOpacity,

}) => {
  const classes = ['asynch-rectangle-form-button'];

  icon && classes.push(`enabled-icon`);
  bg && classes.push(`bg-${bg}`);
  bgOpacity && classes.push(`opacity-${bgOpacity}`);

  return (
    <button className={classes.join(' ')}>
      {icon && <div className="icon-wrapper">{icon}</div>}
      {isSubmitting ? <LoadingIcon /> : children}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default AsynchRectangleFormButton;
