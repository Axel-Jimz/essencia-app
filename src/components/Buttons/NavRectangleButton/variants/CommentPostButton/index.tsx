import React from 'react';
import NavRectangleButton from '../..';
import CommentIcon from '../../../../icons/CommentIcon';

const CommentPostButton: React.FC = () => {
  return (
    <NavRectangleButton navigateTo='/' bg='gray'>
        <CommentIcon /> Comentar
    </NavRectangleButton>
  );
};

export default CommentPostButton;