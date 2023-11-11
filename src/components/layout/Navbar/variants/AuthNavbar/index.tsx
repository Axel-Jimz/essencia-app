import React from 'react';
import Navbar from '../..';
import Logo from '../../../../brand/Logo';
import ToggleThemeButton from '../../../../buttons/RoundButton/variants/ToggleThemeButton';

import "./styles/index.css";

const AuthNavbar: React.FC = () => {
  return (
    <Navbar id='auth'>
      <Logo />
      <ToggleThemeButton />
    </Navbar>
  );
};

export default AuthNavbar;