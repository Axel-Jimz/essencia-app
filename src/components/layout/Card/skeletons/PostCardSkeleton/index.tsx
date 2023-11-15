import React from "react";
import Card from "../..";

import "./styles/index.css";
import "./styles/theme.css";

const PostCardSkeleton: React.FC = () => {
  return (
    <Card id="post-skeleton">
      <div className="card-header">
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>

      <div className="card-main">
        <div></div>
      </div>

      <div className="card-footer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Card>
  );
};

export default PostCardSkeleton;
