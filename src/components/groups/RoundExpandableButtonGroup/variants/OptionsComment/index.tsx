import React from "react";
import { OptionsCommentProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteCommentButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteCommentButton";

const OptionsComment: React.FC<OptionsCommentProps> = ({ postId, commentId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} id="comments" bg="white">
      <DeleteCommentButton postId={postId} commentId={commentId} />
    </RoundExpandableButtonGroup>
  );
};

export default OptionsComment;
