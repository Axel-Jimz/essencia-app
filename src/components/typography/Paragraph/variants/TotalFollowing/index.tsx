import React from 'react';
import { TotalFollowingProps } from './props';
import Paragraph from '../..';

const TotalFollowing: React.FC<TotalFollowingProps> = ({ value, children }) => {
  return (
    <Paragraph size='xs' weight='regular' color='gray'>
        {`${value} ${children}`}
    </Paragraph>
  );
};

export default TotalFollowing;