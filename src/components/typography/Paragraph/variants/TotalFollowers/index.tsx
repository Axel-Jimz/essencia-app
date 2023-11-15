import React from 'react';
import { TotalFollowersProps } from './props';
import Paragraph from '../..';

const TotalFollowers: React.FC<TotalFollowersProps> = ({ value, children }) => {
  return (
    <Paragraph size='xs' weight='regular' color='gray'>
        {`${value} ${children}`}
    </Paragraph>
  );
};

export default TotalFollowers;