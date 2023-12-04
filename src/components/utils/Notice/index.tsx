// Import React.
import React from "react";

import { NoticeProps } from "./props";

import RedirectPageButton from "../../buttons/NavRectangleButton/variants/RedirectPageButton";

import "./styles/index.css";
import "./styles/theme.css";

const Notice: React.FC<NoticeProps> = ({
  icon,
  title,
  description,
  buttonContent,
  buttonRedirectPath,
}) => {
  const classes = ["notice"];

  return (
    <div className={classes.join(" ")}>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonContent && (
        <RedirectPageButton to={buttonRedirectPath || ''}>{buttonContent}</RedirectPageButton>
      )}
    </div>
  );
};

export default Notice;
