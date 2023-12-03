import React from "react";
import Container from "../../components/layout/Container";
import CreatePostForm from "../../components/forms/Form/variants/CreatePostForm";
import CardGroup from "../../components/groups/CardGroup";
import PostCardSkeleton from "../../components/layout/Card/skeletons/PostCardSkeleton";
import { useQuery } from "react-query";
import PostCard from "../../components/layout/Card/variants/PostCard";
import { sortNotificationsByTimestamp } from "../../utils/array/groupAndSortNotificationsByDate";
import { firebaseGetUserPostsAndData } from "../../services/firebase/functions/data/read/firebaseGetUserPostsAndData";

import "./styles/index.css";

const FeedContainer: React.FC = () => {
  const postsData = useQuery("posts", firebaseGetUserPostsAndData);

  const sortedPosts = postsData.data
    ? sortNotificationsByTimestamp(postsData.data)
    : [];

  return (
    <Container id="feed">
      <CreatePostForm />
      <CardGroup stack="vertical">
        {postsData.isLoading ? (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        ) : (
          sortedPosts.map((post) => (
            <div key={post.postId}>
              <PostCard
                postId={post.postId}
                authorId={post.authorId}
                profilePictureURL={post.profilePictureURL}
                username={post.username}
                createdAt={post.createdAt}
                postContent={post.postContent}
                postImage={post.postImage}
              />
            </div>
          ))
        )}
      </CardGroup>
    </Container>
  );
};

export default FeedContainer;
