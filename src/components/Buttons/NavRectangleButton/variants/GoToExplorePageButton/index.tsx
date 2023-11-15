import React from 'react';
import NavRectangleButton from '../..';
import SearchIcon from '../../../../icons/SearchIcon';

const GoToExplorePageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<SearchIcon />} navigateTo='/explore' bg='gray' bgOpacity='40'>
        Explorar
    </NavRectangleButton>
  );
};

export default GoToExplorePageButton;