import React from 'react';
import { DescriptionProps } from './props';
import Paragraph from '../..';

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <Paragraph size='sm' weight='regular' color='gray'>
        {children}
    </Paragraph>
  );
};

export default Description;