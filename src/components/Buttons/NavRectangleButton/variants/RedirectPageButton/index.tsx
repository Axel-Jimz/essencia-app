import React from 'react';
import { RedirectPageButtonProps } from './props';

import NavRectangleButton from '../..';

const RedirectPageButton: React.FC<RedirectPageButtonProps> = ({ to, children }) => {
  return (
    <NavRectangleButton navigateTo={to} bg='blue'>
        {children}
    </NavRectangleButton>
  );
};

export default RedirectPageButton;