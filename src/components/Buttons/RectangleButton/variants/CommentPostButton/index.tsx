import React from 'react';
import { CommentPostButtonProps } from './props';
import CommentIcon from '../../../../icons/CommentIcon';
import { useNavigate } from 'react-router-dom';
import RectangleButton from '../..';

const CommentPostButton: React.FC<CommentPostButtonProps> = ({ postId, authorId }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/posts/${postId}`, { state: { authorId }, replace: false });
  };

  return (
    <RectangleButton onClick={handleButtonClick} bg='gray'>
      <CommentIcon /> Comentar
    </RectangleButton>
  );
};

export default CommentPostButton;
