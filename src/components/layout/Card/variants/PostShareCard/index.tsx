import React, { useContext } from "react";
import { PostShareCardProps } from "./props";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

import Card from "../..";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import Username from "../../../../typography/Heading/variants/Username";
import FollowUserButton from "../../../../buttons/AsynchRectangleButton/variants/FollowUserButton";
import CreatedAt from "../../../../typography/Paragraph/variants/CreatedAt";
import SharedPostOptions from "../../../../groups/RoundExpandableButtonGroup/variants/SharedPostOptions";
import Content from "../../../../typography/Paragraph/variants/Content";
import PostImage from "../../../../images/CustomImage/variants/PostImage";
import LikePostButton from "../../../../buttons/AsynchRectangleButton/variants/LikePostButton";
import SharePostButton from "../../../../buttons/AsynchRectangleButton/variants/SharePostButton";
import CommentPostButton from "../../../../buttons/RectangleButton/variants/CommentPostButton";
import TotalShares from "../../../../typography/Paragraph/variants/TotalShares";
import TotalLikes from "../../../../typography/Paragraph/variants/TotalLikes";
import TotalComments from "../../../../typography/Paragraph/variants/TotalComments";

import "./styles/index.css";
import "./styles/theme.css";

const PostShareCard: React.FC<PostShareCardProps> = ({ postId, authorId, profilePictureURL, username, createdAt, postContent, postImage }) => {
  const { userId } = useContext(UserModelContext);

  return (
    <Card id="post-share">
      <div className="card-header">
        <div>
          <ProfilePicture src={profilePictureURL} alt={username} navigateTo={authorId} />
        </div>
        <div>
          <Username>
            {username} - {authorId !== userId && <FollowUserButton authorId={authorId} />}
          </Username>
          <CreatedAt>{createdAt}</CreatedAt>
        </div>
        <div>
            <SharedPostOptions sharedPostId={postId} authorId={authorId} />
        </div>
      </div>

      <div className="card-main">
        <div>
          <Content>{postContent}</Content>
        </div>

        <div>
          <PostImage src={postImage} alt={username} />
        </div>

        <div>
          <TotalLikes postId={postId} />
          <div>
            <TotalComments postId={postId} />
            <TotalShares postId={postId}/>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <LikePostButton postId={postId} authorId={authorId} />
        <CommentPostButton postId={postId} authorId={authorId} />
        <SharePostButton postId={postId} authorId={authorId} />
      </div>
    </Card>
  );
};

export default PostShareCard;
