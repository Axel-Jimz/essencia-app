import React from "react";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteAllPersonalNotificationsButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteAllPersonalNotificationsButton";

const NotificationsOptions: React.FC = () => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeleteAllPersonalNotificationsButton />
    </RoundExpandableButtonGroup>
  );
};

export default NotificationsOptions;
