import React from 'react';
import { ButtonGroupProps } from './props';

import "./styles/index.css";


const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, stack }) => {
  const classes = ["button-group"];

  stack && classes.push(`stack-${stack}`)

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );
};

export default ButtonGroup;