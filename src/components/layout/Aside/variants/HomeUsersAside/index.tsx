import React, { useContext } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import Aside from "../..";
import ProfileCard from "../../../Card/variants/ProfileCard";
import CardGroup from "../../../../groups/CardGroup";
import Callout from "../../../../typography/Heading/variants/Callout";
import ViewUserSuggestionsButton from "../../../../buttons/NavRectangleButton/variants/ViewUserSuggestionsButton";
import UserSuggestionCard from "../../../Card/variants/UserSuggestionCard";
import { useQuery } from "react-query";
import { firebaseGetSuggestedUsers } from "../../../../../services/firebase/functions/data/read/firebaseGetSuggestedUsers";
import SuggestedUsersNotice from "../../../../utils/Notice/variants/SuggestedUsersNotice";

import "./styles/index.css";

const HomeUsersAside: React.FC = () => {
  const { userId, profilePictureURL, username } = useContext(UserModelContext);

  const suggestedUsersData = useQuery(["suggestedUsers"], async () => {
    const data = firebaseGetSuggestedUsers(userId);
    return data;
  });

  return (
    <Aside id="home-users">
      <ProfileCard
        userId={userId}
        profilePictureURL={profilePictureURL}
        username={username}
      />

      <div>
        <Callout>Sugerencias para ti</Callout>
        <div></div>
      </div>

      <CardGroup stack="vertical">
        {suggestedUsersData.data === undefined ||
        suggestedUsersData.data.length <= 0 ? (
          <SuggestedUsersNotice />
        ) : (
          suggestedUsersData.data.map((user) => (
            <div key={user.userId}>
              <UserSuggestionCard
                userId={user.userId}
                profilePictureURL={user.profilePictureURL}
                username={user.username}
              />
            </div>
          ))
        )}
      </CardGroup>
    </Aside>
  );
};

export default HomeUsersAside;
