import React from "react";
import { NoticeNotificationProps } from "./props";

import SuccessIcon from "../../icons/SuccessIcon";
import InfoIcon from "../../icons/InfoIcon";
import ErrorIcon from "../../icons/ErrorIcon";
import WarningIcon from "../../icons/WarningIcon";

import "./styles/index.css";
import "./styles/theme.css";

const NoticeNotification: React.FC<NoticeNotificationProps> = ({
  status,
  title,
  message,
}) => {
  const classes = ["notice-notification"];

  status === "success" && classes.push("success");
  status === "error" && classes.push("error");
  status === "info" && classes.push("info");
  status === "warning" && classes.push("warning");

  let icon = null;

  switch (status) {
    case "success":
      icon = <SuccessIcon />;
      break;
    case "error":
      icon = <ErrorIcon />;
      break;
    case "info":
      icon = <InfoIcon />;
      break;
    case "warning":
      icon = <WarningIcon />;
      break;
    default:
      break;
  }

  return (
    <div className={classes.join(" ")}>
      <div className="icon">{icon}</div>

      <div className="content">
        <h6 className="title">{title}</h6>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default NoticeNotification;
