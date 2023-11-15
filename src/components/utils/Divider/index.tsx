import React from 'react';
import { DividerProps } from './props';

import "./styles/index.css";
import "./styles/theme.css";

const Divider: React.FC<DividerProps> = ({ bg }) => {
    const classes = ['divider'];

    bg && classes.push(`bg-${bg}`)

  return (
    <div className={classes.join(' ')}></div>
  );
};

export default Divider;