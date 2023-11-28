import React from 'react';
import { TotalFollowersProps } from './props';
import Paragraph from '../..';
import useUsersFollowers from './hooks/useUsersFollowers';

const TotalFollowers: React.FC<TotalFollowersProps> = ({ profileId }) => {
  const { followersData } = useUsersFollowers(profileId);

  return (
    <Paragraph size='xs' weight='regular' color='black'>
      {`${followersData.length} seguidores`}
    </Paragraph>
  );
};

export default TotalFollowers;
