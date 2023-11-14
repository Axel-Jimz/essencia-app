import React, { useState } from 'react';

import { ParagraphProps } from './props';

import "./styles/index.css";
import "./styles/theme.css";

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  size,
  weight,
  color,
  style,
  enableReadMore,
}) => {
  const [showFullText, setShowFullText] = useState(false);
  const maxCharacters = 150;

  const classes = ["paragraph"];
  if (size !== '') classes.push(`size-${size}`);
  if (weight !== '') classes.push(`weight-${weight}`);
  if (color !== '') classes.push(`color-${color}`);

  const content = enableReadMore ? (showFullText ? children : `${children.slice(0, maxCharacters)}`) : children;

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <p className={classes.join(' ')} style={style}>
      {content}
      {enableReadMore && children.length > maxCharacters && (
        <button onClick={toggleShowFullText}>
          {showFullText ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </p>
  );
};

export default Paragraph;