import React from "react";
import { OptionsPersonalPostProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeletePostButton from "../../../../buttons/AsynchRectangleButton/variants/DeletePostButton";

const OptionsPersonalPost: React.FC<OptionsPersonalPostProps> = ({ postId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeletePostButton postId={postId} />
    </RoundExpandableButtonGroup>
  );
};

export default OptionsPersonalPost;
