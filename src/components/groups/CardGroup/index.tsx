import React from 'react';
import { CardGroupProps } from './props';

import "./styles/index.css";


const CardGroup: React.FC<CardGroupProps> = ({ children, stack }) => {
  const classes = ["card-group"];

  stack && classes.push(`stack-${stack}`)

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );
};

export default CardGroup;