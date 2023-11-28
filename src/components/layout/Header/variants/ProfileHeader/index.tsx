import React, { useContext } from 'react';
import Header from '../..';

import "./styles/index.css";
import ProfilePicture from '../../../../avatars/ProfilePicture';
import Username from '../../../../typography/Heading/variants/Username';
import TotalPosts from '../../../../typography/Paragraph/variants/TotalPosts';
import TotalFollowers from '../../../../typography/Paragraph/variants/TotalFollowers';
import TotalFollowing from '../../../../typography/Paragraph/variants/TotalFollowing';
import Biography from '../../../../typography/Paragraph/variants/Biography';
import GoToSettingPageButton from '../../../../buttons/NavRoundButton/variants/GoToSettingPageButton';
import { UserModelContext } from '../../../../../state/contexts/UserModelContext';
import FollowUserButton from '../../../../buttons/AsynchRectangleButton/variants/FollowUserButton';

export interface ProfileHeaderProps {
    username: string;
    profileId: string;
    profilePictureURL: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, profileId, profilePictureURL }) => {
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus autem modi nam enim ducimus obcaecati officiis.
                </Biography>
            </div>

        </div>
    </Header>
  );
};

export default ProfileHeader;