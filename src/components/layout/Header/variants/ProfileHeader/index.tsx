import React, { useContext } from 'react';
import { ProfileHeaderProps } from './props';
import Header from '../..';

import ProfilePicture from '../../../../avatars/ProfilePicture';
import Username from '../../../../typography/Heading/variants/Username';
import TotalPosts from '../../../../typography/Paragraph/variants/TotalPosts';
import TotalFollowers from '../../../../typography/Paragraph/variants/TotalFollowers';
import TotalFollowing from '../../../../typography/Paragraph/variants/TotalFollowing';
import Biography from '../../../../typography/Paragraph/variants/Biography';
import GoToSettingPageButton from '../../../../buttons/NavRoundButton/variants/GoToSettingPageButton';
import { UserModelContext } from '../../../../../state/contexts/UserModelContext';
import FollowUserButton from '../../../../buttons/AsynchRectangleButton/variants/FollowUserButton';

import "./styles/index.css";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, profileId, profilePictureURL, biography }) => {
    const { userId } = useContext(UserModelContext);

  return (
    <Header id='profile'>
        <div>
            <ProfilePicture src={profilePictureURL} alt={username} />
        </div>
        <div>
            {/* Parte 1 */}
            <div>
                <Username>
                    {username} - {profileId !== userId && <FollowUserButton authorId={profileId} />}
                </Username>
                <GoToSettingPageButton />
            </div>


            {/* Parte 2 */}

            <div>
                <TotalPosts profileId={profileId}/>
                <TotalFollowers profileId={profileId} />
                <TotalFollowing profileId={profileId} />
            </div>

            {/* Parte 3 */}

            <div>
                <Biography>
                    {biography}
                </Biography>
            </div>

        </div>
    </Header>
  );
};

export default ProfileHeader;