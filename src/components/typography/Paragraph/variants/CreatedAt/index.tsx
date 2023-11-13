import React from 'react';
import { CreatedAtProps } from './props';
import Paragraph from '../..';

const CreatedAt: React.FC<CreatedAtProps> = ({ children }) => {
  return (
    <Paragraph size='xs' weight='regular' color='gray'>
        {children}
    </Paragraph>
  );
};

export default CreatedAt;