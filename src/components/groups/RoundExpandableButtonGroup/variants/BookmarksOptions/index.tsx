import React from "react";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteAllBookmarksButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteAllBookmarksButton";

const BookmarksOptions: React.FC = () => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeleteAllBookmarksButton />
    </RoundExpandableButtonGroup>
  );
};

export default BookmarksOptions;
