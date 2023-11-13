import React from 'react';
import { CardProps } from './props';

import "./styles/index.css";
import "./styles/theme.css";

const Card: React.FC<CardProps> = ({ children, id }) => {
    const classes = ['card']

  return (
    <div className={classes.join(' ')} id={id} >
        {children}
    </div>
  );
};

export default Card;