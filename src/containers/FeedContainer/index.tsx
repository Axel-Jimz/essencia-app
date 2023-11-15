import React from "react";
import Container from "../../components/layout/Container";
import CardGroup from "../../components/groups/CardGroup";
import PostCardSkeleton from "../../components/layout/Card/skeletons/PostCardSkeleton";

import "./styles/index.css";

const FeedContainer: React.FC = () => {
  return (
    <Container id="feed">
      <CardGroup stack="vertical">
        <PostCardSkeleton />
        <PostCardSkeleton />
        <PostCardSkeleton />
      </CardGroup>
    </Container>
  );
};

export default FeedContainer;
