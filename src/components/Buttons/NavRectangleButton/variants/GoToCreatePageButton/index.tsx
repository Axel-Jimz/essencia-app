import React from 'react';
import NavRectangleButton from '../..';
import StarIcon from '../../../../icons/StarIcon';

const GoToCreatePageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<StarIcon />} navigateTo='/create' bg='green'>
        Crear
    </NavRectangleButton>
  );
};

export default GoToCreatePageButton;