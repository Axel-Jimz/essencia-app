import React from "react";
import AsynchRectangleButton from "../..";
import HeartIcon from "../../../../icons/HeartIcon";


const LikePostButton: React.FC = () => {
  return (
    <AsynchRectangleButton
      onClick={() => console.log('Dar me gusta al post')}
      bg="gray"
    >
        <HeartIcon active={false} /> Me gusta
    </AsynchRectangleButton>
  );
};

export default LikePostButton;
