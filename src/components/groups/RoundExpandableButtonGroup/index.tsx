import React, { useState } from "react";

import { RoundExpandableButtonGroupPropsProps } from "./props";

import "./styles/index.css";
import "./styles/theme.css";

const RoundExpandableButtonGroup: React.FC<RoundExpandableButtonGroupPropsProps> = ({ children, icon, bg, tooltipMessage, id }) => {
  const [showButtons, setShowButtons] = useState(false);

  const classes = ["round-expandable-button-group"];

  bg && classes.push(`bg-${bg}`);
  showButtons && classes.push("active");

  return (
    <div className={classes.join(" ")} id={id}>
      <div className="icon" onClick={() => setShowButtons(!showButtons)}>
        {icon}
      </div>
      <div className="button-group">{children}</div>
      {tooltipMessage && (
        <span className="tooltip-message">{tooltipMessage}</span>
      )}
    </div>
  );
};

export default RoundExpandableButtonGroup;
