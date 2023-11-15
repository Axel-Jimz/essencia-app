import React from 'react';
import { HomeMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const HomeMain: React.FC<HomeMainProps> = ({ children }) => {
  return (
    <Main id='home'>
      {children}
    </Main>
  );
};

export default HomeMain;