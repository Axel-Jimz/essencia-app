import React from "react";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import EditCommentButton from "../../../../buttons/AsynchRectangleButton/variants/EditCommentButton";
import DeleteCommentButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteCommentButton";

const OptionsComment: React.FC = () => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} id="comments" bg="white">
      <EditCommentButton />
      <DeleteCommentButton />
    </RoundExpandableButtonGroup>
  );
};

export default OptionsComment;
