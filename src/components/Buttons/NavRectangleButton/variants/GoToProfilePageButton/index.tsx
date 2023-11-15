import React from 'react';
import NavRectangleButton from '../..';
import UserIcon from '../../../../icons/UserIcon';

const GoToProfilePageButton: React.FC = () => {
    
  return (
    <NavRectangleButton icon={<UserIcon />} navigateTo='/profile' bg='gray' bgOpacity='40'>
        Perfil
    </NavRectangleButton>
  );
};

export default GoToProfilePageButton;