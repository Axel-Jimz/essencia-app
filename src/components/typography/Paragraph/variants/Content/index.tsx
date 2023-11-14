import React from 'react';
import { ContentProps } from './props';
import Paragraph from '../..';

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Paragraph size='xs' weight='regular' color='black' enableReadMore={true} >
        {children}
    </Paragraph>
  );
};

export default Content;