import React from "react";
import Container from "../../components/layout/Container";

import "./styles/index.css";
import { useLocation, useParams } from "react-router-dom";
import PostNavbar from "../../components/layout/Navbar/variants/PostNavbar";
import PostMain from "../../components/layout/Main/variants/PostMain";
import CreatePostCommentForm from "../../components/forms/Form/variants/CreatePostCommentForm";
import PostCommentCard from "../../components/layout/Card/variants/PostCommentCard";
import CardGroup from "../../components/groups/CardGroup";
import usePostComments from "./hooks/usePostComments";
import CommentsNotice from "../../components/utils/Notice/variants/CommentsNotice";

const PostContainer: React.FC = () => {
  const { postId } = useParams();
  const {
    state: { authorId },
  } = useLocation();

  const { commentsData } = usePostComments(postId || '');

  return (
    <Container id="post">
      <PostNavbar />
      <PostMain>
        <CardGroup stack="vertical">
          {commentsData.length <= 0 ? (
            <>
              <CommentsNotice />
            </>
          ) : (
            commentsData.map((comment: any) => (
              <div key={comment.commentId}>
                <PostCommentCard
                  profilePictureURL={comment.profilePictureURL}
                  username={comment.username}
                  commentContent={comment.commentContent}
                  createdAt={comment.createdAt}
                  authorId={comment.authorId}
                  commentId={comment.commentId}
                  postId={comment.postId}
                />
              </div>
            ))
          )}
        </CardGroup>
      </PostMain>
      <CreatePostCommentForm postId={postId || ""} authorId={authorId} />
    </Container>
  );
};

export default PostContainer;
