import React from 'react';
import Card from '../..';
import ProfilePicture from '../../../../avatars/ProfilePicture';
import Username from '../../../../typography/Heading/variants/Username';
import TotalFollowers from '../../../../typography/Paragraph/variants/TotalFollowers';
import SignOutButton from '../../../../buttons/AsynchRoundButton/variants/SignOutButton';

import "./styles/index.css";
import "./styles/theme.css";


const ProfileCard: React.FC = () => {
  return (
    <Card id='profile'>
        <ProfilePicture src='' alt='' />
        <div>
            <Username>axel_jimz</Username>
            <TotalFollowers value={0}>
              Seguidores
            </TotalFollowers>
        </div>
        <SignOutButton />
    </Card>
  );
};

export default ProfileCard;