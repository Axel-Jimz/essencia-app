import React, { useContext } from 'react';
import { UserModelContext } from '../../../../../state/contexts/UserModelContext';
import RoundButton from '../..';
import LightIcon from '../../../../icons/LightIcon';
import DarkIcon from '../../../../icons/DarkIcon';

const ToggleThemeButton: React.FC = () => {
  const { theme, changeTheme } = useContext(UserModelContext);

  const icon = theme ? <DarkIcon /> : <LightIcon />;

  return (
    <RoundButton icon={icon} onClick={changeTheme} bg='white' tooltipMessage='Cambiar tema'  />
  );
};

export default ToggleThemeButton;
