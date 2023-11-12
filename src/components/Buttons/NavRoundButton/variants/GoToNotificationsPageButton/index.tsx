import React from "react";
import NavRoundButton from "../..";
import NotificationIcon from "../../../../icons/NotificationIcon";

const GoToNotificationsPageButton: React.FC = () => {
  return (
    <NavRoundButton
      icon={<NotificationIcon />}
      navigateTo="/notifications"
      bg="white"
      tooltipMessage="Ver mis notificaciones"
    />
  );
};

export default GoToNotificationsPageButton;
