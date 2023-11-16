import React from 'react';
import NavRectangleButton from '../..';
import SaveIcon from '../../../../icons/SaveIcon';

const GoToBookmarksButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<SaveIcon />} navigateTo='/bookmarks' bg='gray' bgOpacity='40'>
        Guardados
    </NavRectangleButton>
  );
};

export default GoToBookmarksButton;