import React from 'react';
import { NotificationsMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const NotificationsMain: React.FC<NotificationsMainProps> = ({ children }) => {
  return (
    <Main id='notifications'>
      {children}
    </Main>
  );
};

export default NotificationsMain;