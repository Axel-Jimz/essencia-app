import React from 'react';
import Card from '../..';
import ProfilePicture from '../../../../avatars/ProfilePicture';
import Username from '../../../../typography/Heading/variants/Username';
import TotalFollowers from '../../../../typography/Paragraph/variants/TotalFollowers';
import SignOutButton from '../../../../buttons/AsynchRoundButton/variants/SignOutButton';

import "./styles/index.css";
import "./styles/theme.css";

export interface ProfileCardProps {
  userId: string;
  username: string;
  profilePictureURL: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userId, profilePictureURL, username }) => {
  return (
    <Card id='profile'>
        <ProfilePicture src={profilePictureURL} alt={username} navigateTo={userId} />
        <div>
            <Username>{username}</Username>
            <TotalFollowers profileId={userId} />
        </div>
        <SignOutButton />
    </Card>
  );
};

export default ProfileCard;