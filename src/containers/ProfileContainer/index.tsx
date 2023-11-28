import React from "react";
import Container from "../../components/layout/Container";
import { useParams } from "react-router-dom";
import { useQueries } from "react-query";
import { firebaseGetPersonalData } from "../../services/firebase/functions/data/read/firebaseGetPersonalData";
import { firebaseGetPersonalUserPosts } from "../../services/firebase/functions/data/read/firebaseGetPersonalUserPosts";
import ProfileHeader from "../../components/layout/Header/variants/ProfileHeader";
import ProfileMain from "../../components/layout/Main/variants/ProfileMain";
import LoadingIcon from "../../components/icons/LoadingIcon";
import ProfileNotice from "../../components/utils/Notice/variants/ProfileNotice";
import CardGroup from "../../components/groups/CardGroup";
import PostCard from "../../components/layout/Card/variants/PostCard";

import "./styles/index.css";

const ProfileContainer: React.FC = () => {
  const { profileId } = useParams();

  const [profileData, profilePersonalPosts] = useQueries([
    {
      queryKey: ["profileData", profileId],
      queryFn: async () => {
        if (profileId) {
          const userData = await firebaseGetPersonalData(profileId);
          return userData;
        }
        return null;
      },
    },
    {
      queryKey: ["profilePersonalPosts", profileId],
      queryFn: async () => {
        if (profileId) {
          const userData = await firebaseGetPersonalUserPosts(profileId);
          return userData;
        }
        return null;
      },
    },
  ]);

  return (
    <Container id="profile">
      {profileData.isLoading || profilePersonalPosts.isLoading ? (
        <div>
          <LoadingIcon />
        </div>
      ) : (
        <>
          <ProfileHeader
            username={profileData.data.username}
            profileId={profileId}
            profilePictureURL={profileData.data.profilePictureURL}
          />
          <ProfileMain>
            <CardGroup stack="vertical">
              {profilePersonalPosts.data.length <= 0 ? (
                <ProfileNotice />
              ) : (
                profilePersonalPosts.data.map((post) => (
                  <div key={post.postId}>
                    <PostCard
                      postId={post.postId}
                      authorId={post.authorId}
                      profilePictureURL={post.userData.profilePictureURL}
                      username={post.userData.username}
                      createdAt={post.createdAt}
                      postContent={post.postContent}
                      postImage={post.postImage}
                    />
                  </div>
                ))
              )}
            </CardGroup>
          </ProfileMain>
        </>
      )}
    </Container>
  );
};

export default ProfileContainer;

