import React from 'react';
import logo from "../../../assets/logo.svg";
import { LogoProps } from './props';

import "./styles/index.css";

const Logo: React.FC<LogoProps> = ({ showText = true, textColor }) => {
  const classes = ['logo'];

  textColor && classes.push(`text-color-${textColor}`)

  return (
    <div className={classes.join(' ')}>
      <img src={logo} alt="logo" />
      {showText && <span>Essencia</span>}
    </div>
  );
};

export default Logo;
