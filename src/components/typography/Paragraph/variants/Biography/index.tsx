import React from 'react';
import { BiographyProps } from './props';
import Paragraph from '../..';

const Biography: React.FC<BiographyProps> = ({ children }) => {
  return (
    <Paragraph size='xs' weight='regular' color='black' enableReadMore={true} >
        {children}
    </Paragraph>
  );
};

export default Biography;