import React from 'react';
import { SettingMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const SettingMain: React.FC<SettingMainProps> = ({ children }) => {
  return (
    <Main id='setting'>
        {children}
    </Main>
  );
};

export default SettingMain;