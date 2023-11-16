import React from 'react';
import { DividerProps } from './props';

import "./styles/index.css";
import "./styles/theme.css";

const Divider: React.FC<DividerProps> = ({ bg, bgOpacity }) => {
    const classes = ['divider'];

    bg && classes.push(`bg-${bg}`);
    bgOpacity && classes.push(`opacity-${bgOpacity}`);

  return (
    <div className={classes.join(' ')}></div>
  );
};

export default Divider;