import React, { useContext } from 'react';
import { UserModelContext } from '../../state/contexts/UserModelContext';
import { useQuery } from 'react-query';
import { firebaseGetPersonalUserSharedPosts } from '../../services/firebase/functions/data/read/firebaseGetPersonalUserSharedPosts';
import { sortNotificationsByTimestamp } from '../../utils/array/groupAndSortNotificationsByDate';
import Container from '../../components/layout/Container';
import LoadingIcon from '../../components/icons/LoadingIcon';
import SharesNavbar from '../../components/layout/Navbar/variants/SharesNavbar';
import SharesMain from '../../components/layout/Main/variants/SharesMain';
import CardGroup from '../../components/groups/CardGroup';
import SharesNotice from '../../components/utils/Notice/variants/SharesNotice';
import PostShareCard from '../../components/layout/Card/variants/PostShareCard';

import "./styles/index.css";

const SharesContainer: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  const sharedPostsData = useQuery(["shares"], async () => {
    const data = await firebaseGetPersonalUserSharedPosts(userId);
    return data;
  });

  const sortedSharedPosts = sharedPostsData.data
    ? sortNotificationsByTimestamp(sharedPostsData.data)
    : [];

  
  return (
    <Container id="shares">
        {sharedPostsData.isLoading ? (
          <div className="loading">
            <LoadingIcon />
          </div>
        ) : (
          <>
            <SharesNavbar />
            <SharesMain>
              <CardGroup stack="vertical">
                {sortedSharedPosts.length <= 0 ? (
                  <SharesNotice />
                ) : (
                  sortedSharedPosts.map((sharePost: any) => (
                    <div key={sharePost.postId}>
                      <PostShareCard
                        postId={sharePost.postId}
                        authorId={sharePost.authorId}
                        profilePictureURL={
                          sharePost.authorData.profilePictureURL
                        }
                        username={sharePost.authorData.username}
                        createdAt={sharePost.createdAt}
                        postContent={sharePost.postContent}
                        postImage={sharePost.postImage}
                      />
                    </div>
                  ))
                )}
              </CardGroup>
            </SharesMain>
          </>
        )}
    </Container>
  );
};

export default SharesContainer;