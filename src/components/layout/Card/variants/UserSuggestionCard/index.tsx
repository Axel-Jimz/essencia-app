import React from "react";
import Card from "../..";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import Username from "../../../../typography/Heading/variants/Username";
import TotalFollowers from "../../../../typography/Paragraph/variants/TotalFollowers";
import FollowUserButton from "../../../../buttons/AsynchRectangleButton/variants/FollowUserButton";

import "./styles/index.css";
import "./styles/theme.css";

export interface UserSuggestionCardProps {
  userId: string;
  profilePictureURL: string;
  username: string;
}

const UserSuggestionCard: React.FC<UserSuggestionCardProps> = ({ userId, profilePictureURL, username }) => {
  return (
    <Card id="user-suggestion">
      <ProfilePicture src={profilePictureURL} alt={username} navigateTo={userId} />
      <div>
        <Username>{username}</Username>
        <TotalFollowers profileId={userId} />
      </div>
      <div>
        <FollowUserButton authorId={userId} />
      </div>
    </Card>
  );
};

export default UserSuggestionCard;
