import React from 'react';
import { BreakpointRendererProps } from './props';

import "./styles/index.css";

const BreakpointRenderer: React.FC<BreakpointRendererProps> = ({ children, minWidth, maxWidth }) => {
    const classes = ['breakpoint']

    minWidth && classes.push(`min-width ${minWidth}`);
    maxWidth && classes.push(`max-width ${maxWidth}`);

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
};

export default BreakpointRenderer;
