import React from "react";
import { OptionsPostProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import ReportPostButton from "../../../../buttons/AsynchRectangleButton/variants/ReportPostButton";
import SavePostButton from "../../../../buttons/AsynchRectangleButton/variants/SavePostButton";
import BlockUserButton from "../../../../buttons/AsynchRectangleButton/variants/BlockUserButton";


const OptionsPost: React.FC<OptionsPostProps> = ({ postId, authorId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <SavePostButton  postId={postId} />
      <ReportPostButton postId={postId} />
      <BlockUserButton userToBlockId={authorId} />
    </RoundExpandableButtonGroup>
  );
};

export default OptionsPost;
