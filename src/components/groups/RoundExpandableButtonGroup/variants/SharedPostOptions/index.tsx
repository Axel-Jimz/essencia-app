import React from "react";
import { SharedPostOptionsProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteSharedPostButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteSharedPostButton";

const SharedPostOptions: React.FC<SharedPostOptionsProps> = ({ sharedPostId, authorId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeleteSharedPostButton sharedPostId={sharedPostId} authorId={authorId} />
    </RoundExpandableButtonGroup>
  );
};

export default SharedPostOptions;
