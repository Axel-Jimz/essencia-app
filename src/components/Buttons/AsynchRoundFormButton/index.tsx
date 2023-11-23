import React from "react";
import { AsynchRoundFormButtonProps } from "./props";
import LoadingIcon from "../../icons/LoadingIcon";

import "./styles/index.css";
import "./styles/theme.css";

const AsynchRoundFormButton: React.FC<AsynchRoundFormButtonProps> = ({
  icon,
  isSubmitting,
  tooltipMessage,
  bg,
  bgOpacity,

}) => {
  const classes = ['asynch-round-form-button'];

  icon && classes.push(`enabled-icon`);
  bg && classes.push(`bg-${bg}`);
  bgOpacity && classes.push(`opacity-${bgOpacity}`);

  return (
    <button className={classes.join(' ')}>
      {isSubmitting ? <LoadingIcon /> : icon}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </button>
  );
};

export default AsynchRoundFormButton;
