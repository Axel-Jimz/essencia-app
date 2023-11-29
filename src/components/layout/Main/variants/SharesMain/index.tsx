import React from 'react';
import { SharesMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const SharesMain: React.FC<SharesMainProps> = ({ children }) => {
  return (
    <Main id='shares'>
      {children}
    </Main>
  );
};

export default SharesMain;