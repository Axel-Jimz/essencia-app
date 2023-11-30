import React from 'react';
import NavRectangleButton from '../..';
import SearchIcon from '../../../../icons/SearchIcon';

const GoToSearchPageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<SearchIcon />} navigateTo='/search' bg='gray' bgOpacity='40'>
        Buscar
    </NavRectangleButton>
  );
};

export default GoToSearchPageButton;