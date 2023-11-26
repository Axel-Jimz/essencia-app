import React from "react";
import { NotificationOptionsProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteNotificationButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteNotificationButton";

const NotificationOptions: React.FC<NotificationOptionsProps> = ({ notificationId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeleteNotificationButton notificationId={notificationId} />
    </RoundExpandableButtonGroup>
  );
};

export default NotificationOptions;
