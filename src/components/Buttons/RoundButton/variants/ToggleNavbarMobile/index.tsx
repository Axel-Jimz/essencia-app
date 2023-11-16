import React, { useContext } from 'react';
import { UserModelContext } from '../../../../../state/contexts/UserModelContext';
import RoundButton from '../..';
import MenuIcon from '../../../../icons/MenuIcon';
import CloseIcon from '../../../../icons/CloseIcon';

const ToggleNavbarMobile: React.FC = () => {
  const { mobileHomeNavbarVisibility, toggleMobileHomeNavbarVisibility } = useContext(UserModelContext);

  const icon = mobileHomeNavbarVisibility ? <CloseIcon /> : <MenuIcon />;

  return (
    <RoundButton icon={icon} onClick={toggleMobileHomeNavbarVisibility}  bg="white"  />
  );
};

export default ToggleNavbarMobile;
