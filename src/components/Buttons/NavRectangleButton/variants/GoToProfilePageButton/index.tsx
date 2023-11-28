import React from 'react';
import NavRectangleButton from '../..';
import UserIcon from '../../../../icons/UserIcon';

export interface GoToProfilePageButtonProps {
  navigateTo: string;
}

const GoToProfilePageButton: React.FC<GoToProfilePageButtonProps> = ({ navigateTo }) => {
    
  return (
    <NavRectangleButton icon={<UserIcon />} navigateTo={`/profile/${navigateTo}`} bg='gray' bgOpacity='40'>
        Perfil
    </NavRectangleButton>
  );
};

export default GoToProfilePageButton;