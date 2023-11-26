import React from "react";
import NavRectangleButton from "../..";

export interface GoToSpecificPostButtonProps {
  postId: string;
}

const GoToSpecificPostButton: React.FC<GoToSpecificPostButtonProps> = ({ postId }) => {
  return (
    <NavRectangleButton
      navigateTo={`/posts/zeQLhQ24AKubQqhDerBUwVaniyPOCB`}
      bg="blue"
      unstyled={true}
    >
      Ir a la publicación
    </NavRectangleButton>
  );
};

export default GoToSpecificPostButton;
