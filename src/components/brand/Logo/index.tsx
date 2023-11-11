import React from 'react';
import logo from "../../../assets/logo.svg";

import "./styles/index.css";

const Logo: React.FC = () => {
  return (
    <div className='logo'>
      <img src={logo} alt="logo" />
      <span>Essencia</span>
    </div>
  );
};

export default Logo;