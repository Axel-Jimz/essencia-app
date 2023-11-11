import React from "react";

import { NavRoundButtonProps } from "./props";
import { NavLink } from "react-router-dom";

import "./styles/index.css";
import "./styles/theme.css";

const NavRoundButton: React.FC<NavRoundButtonProps> = ({
  icon,
  navigateTo,
  tooltipMessage,
  bg,
}) => {
  const classes = ['nav-round-button'];

  bg && classes.push(`bg-${bg}`);

  return (
    <NavLink className={classes.join(' ')} to={navigateTo}>
      {icon}
      {tooltipMessage && <span className="tooltip-message">{tooltipMessage}</span>}
    </NavLink>
  );
};

export default NavRoundButton;
