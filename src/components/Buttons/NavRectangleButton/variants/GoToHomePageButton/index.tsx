import React from 'react';
import NavRectangleButton from '../..';
import HomeIcon from '../../../../icons/HomeIcon';

const GoToHomePageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<HomeIcon />} navigateTo='/' bg='gray' bgOpacity='40'>
        Inicio
    </NavRectangleButton>
  );
};

export default GoToHomePageButton;