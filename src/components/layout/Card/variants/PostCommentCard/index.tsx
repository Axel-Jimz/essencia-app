import React, { useContext } from "react";
import { PostCommentCardProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import Card from "../..";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import Username from "../../../../typography/Heading/variants/Username";
import CreatedAt from "../../../../typography/Paragraph/variants/CreatedAt";
import Content from "../../../../typography/Paragraph/variants/Content";
import OptionsComment from "../../../../groups/RoundExpandableButtonGroup/variants/OptionsComment";

import "./styles/index.css";
import "./styles/theme.css";

const PostCommentCard: React.FC<PostCommentCardProps> = ({ profilePictureURL, username, commentContent, createdAt, authorId, commentId, postId }) => {
  const { userId } = useContext(UserModelContext);

  return (
    <Card id="post-comment">
      <div>
        <ProfilePicture src={profilePictureURL} alt={username} />
      </div>
      <div>
        <div>
          <Username>{username}</Username>
          <CreatedAt>{createdAt}</CreatedAt>
        </div>

        <Content>{commentContent}</Content>
      </div>
      <div>
        {authorId === userId && (
          <OptionsComment postId={postId} commentId={commentId} />
        )}
      </div>
    </Card>
  );
};

export default PostCommentCard;
