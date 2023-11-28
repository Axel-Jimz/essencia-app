import React from 'react';
import { TotalFollowingProps } from './props';
import Paragraph from '../..';
import useUsersFollowing from './hooks/useUsersFollowing';


const TotalFollowing: React.FC<TotalFollowingProps>= ({ profileId }) => {
  const { followingData } = useUsersFollowing(profileId)
  
  return (
    <Paragraph size='xs' weight='regular' color='black'>
       {`${followingData.length} siguiendo`}
    </Paragraph>
  );
};

export default TotalFollowing;