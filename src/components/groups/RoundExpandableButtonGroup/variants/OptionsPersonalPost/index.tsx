import React from "react";
import { OptionsPersonalPostProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import EditPostButton from "../../../../buttons/AsynchRectangleButton/variants/EditPostButton";
import DeletePostButton from "../../../../buttons/AsynchRectangleButton/variants/DeletePostButton";


const OptionsPersonalPost: React.FC<OptionsPersonalPostProps> = ({ postId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <EditPostButton />
      <DeletePostButton postId={postId} />
    </RoundExpandableButtonGroup>
  );
};

export default OptionsPersonalPost;
