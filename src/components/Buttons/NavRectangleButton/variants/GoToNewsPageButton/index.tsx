import React from 'react';
import NavRectangleButton from '../..';
import GlobeIcon from '../../../../icons/GlobeIcon';

const GoToNewsPageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<GlobeIcon />} navigateTo='/news' bg='gray' bgOpacity='40'>
        Noticias
    </NavRectangleButton>
  );
};

export default GoToNewsPageButton;