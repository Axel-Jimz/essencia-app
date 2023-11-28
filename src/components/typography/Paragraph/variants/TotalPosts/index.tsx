import React from 'react';
import { TotalPostsProps } from './props';
import Paragraph from '../..';
import useUserPersonalPosts from './hooks/useUserPersonalPosts';


const TotalPosts: React.FC<TotalPostsProps>= ({ profileId }) => {
  const { userPersonalPostsData } = useUserPersonalPosts(profileId);

  return (
    <Paragraph size='xs' weight='regular' color='black'>
        {`${userPersonalPostsData.length} publicaciones`}
    </Paragraph>
  );
};

export default TotalPosts;