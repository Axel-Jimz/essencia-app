import React from "react";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteAllSharedPostsButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteAllSharedPostsButton";

const SharedPostsOptions: React.FC = () => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeleteAllSharedPostsButton />
    </RoundExpandableButtonGroup>
  );
};

export default SharedPostsOptions;
