import React from 'react';
import { ProfileMainProps } from './props';
import Main from '../..';

import "./styles/index.css";

const ProfileMain: React.FC<ProfileMainProps> = ({ children }) => {
  return (
    <Main id='profile'>
        {children}
    </Main>
  );
};

export default ProfileMain;