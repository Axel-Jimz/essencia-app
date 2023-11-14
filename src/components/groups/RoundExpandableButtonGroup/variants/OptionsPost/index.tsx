import React from "react";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import ReportPostButton from "../../../../buttons/AsynchRectangleButton/variants/ReportPostButton";
import SavePostButton from "../../../../buttons/AsynchRectangleButton/variants/SavePostButton";
import BlockUserButton from "../../../../buttons/AsynchRectangleButton/variants/BlockUserButton";

const OptionsPost: React.FC = () => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <SavePostButton />
      <ReportPostButton />
      <BlockUserButton />
    </RoundExpandableButtonGroup>
  );
};

export default OptionsPost;
