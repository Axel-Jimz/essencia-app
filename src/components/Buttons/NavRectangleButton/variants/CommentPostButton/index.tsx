import React from 'react';
import { CommentPostButtonProps } from './props';
import NavRectangleButton from '../..';
import CommentIcon from '../../../../icons/CommentIcon';

const CommentPostButton: React.FC<CommentPostButtonProps> = ({ postId }) => {
  return (
    <NavRectangleButton navigateTo={`/posts/${postId}`} bg='gray'>
        <CommentIcon /> Comentar
    </NavRectangleButton>
  );
};

export default CommentPostButton;