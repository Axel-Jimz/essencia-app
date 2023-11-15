import React from 'react';
import NavRectangleButton from '../..';
import SettingIcon from '../../../../icons/SettingIcon';

const GoToSettingPageButton: React.FC = () => {
  return (
    <NavRectangleButton icon={<SettingIcon />} navigateTo='/setting' bg='gray' bgOpacity='40'>
        Configuracion
    </NavRectangleButton>
  );
};

export default GoToSettingPageButton;