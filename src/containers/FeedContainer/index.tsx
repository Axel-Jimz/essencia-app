import React from "react";
import Container from "../../components/layout/Container";
import CreatePostForm from "../../components/forms/Form/variants/CreatePostForm";
import CardGroup from "../../components/groups/CardGroup";
import PostCardSkeleton from "../../components/layout/Card/skeletons/PostCardSkeleton";

import "./styles/index.css";

import { useQuery } from "react-query";
import { firebaseGetUserPostsAndData } from "../../services/firebase/functions/data/read/firebaseGetUserPostsAndData";
import PostCard from "../../components/layout/Card/variants/PostCard";

const FeedContainer: React.FC = () => {
  const posts = useQuery("posts", firebaseGetUserPostsAndData);

  return (
    <Container id="feed">
      <CreatePostForm />
      <CardGroup stack="vertical">
        {posts.isLoading ? (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        ) : (
          posts.data.map((post) => (
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
