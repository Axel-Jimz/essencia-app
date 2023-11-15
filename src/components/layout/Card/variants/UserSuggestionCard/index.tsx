import React from "react";
import Card from "../..";
import ProfilePicture from "../../../../avatars/ProfilePicture";
import Username from "../../../../typography/Heading/variants/Username";
import TotalFollowers from "../../../../typography/Paragraph/variants/TotalFollowers";

import "./styles/index.css";
import "./styles/theme.css";
import FollowUserButton from "../../../../buttons/AsynchRectangleButton/variants/FollowUserButton";

const UserSuggestionCard: React.FC = () => {
  return (
    <Card id="user-suggestion">
      <ProfilePicture src="" alt="" />
      <div>
        <Username>axel_jimz</Username>
        <TotalFollowers value={0}>Seguidores</TotalFollowers>
      </div>
      <div>
        <FollowUserButton />
      </div>
    </Card>
  );
};

export default UserSuggestionCard;
