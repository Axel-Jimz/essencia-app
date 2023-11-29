import React from "react";
import { BookmarkOptionsProps } from "./props";
import RoundExpandableButtonGroup from "../..";
import MoreIcon from "../../../../icons/MoreIcon";
import DeleteBookmarkButton from "../../../../buttons/AsynchRectangleButton/variants/DeleteBookmarkButton";

const BookmarkOptions: React.FC<BookmarkOptionsProps> = ({ bookmarkId }) => {
  return (
    <RoundExpandableButtonGroup icon={<MoreIcon />} bg="white" id="post">
      <DeleteBookmarkButton postId={bookmarkId} />
    </RoundExpandableButtonGroup>
  );
};

export default BookmarkOptions;
