import React, { useContext } from "react";
import { LikePostButtonProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import usePostLikes from "./hooks/usePostLikes";
import AsynchRectangleButton from "../..";
import HeartIcon from "../../../../icons/HeartIcon";
import { firebaseLikePost } from "../../../../../services/firebase/functions/data/create/firebaseLikePost";

const LikePostButton: React.FC<LikePostButtonProps> = ({ postId, authorId, }) => {
  const { userId } = useContext(UserModelContext);

  const { isLiked } = usePostLikes(postId, userId);

  return (
    <AsynchRectangleButton
      onClick={async () => await firebaseLikePost(postId, authorId, userId)}
      bg="gray"
    >
      <HeartIcon active={isLiked} /> Me gusta 
    </AsynchRectangleButton>
  );
};

export default LikePostButton;
