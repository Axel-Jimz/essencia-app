import React from "react";
import Aside from "../..";

import "./styles/index.css";
import ProfileCard from "../../../Card/variants/ProfileCard";
import CardGroup from "../../../../groups/CardGroup";
import Callout from "../../../../typography/Heading/variants/Callout";
import ViewUserSuggestionsButton from "../../../../buttons/NavRectangleButton/variants/ViewUserSuggestionsButton";
import UserSuggestionCard from "../../../Card/variants/UserSuggestionCard";

const HomeUsersAside: React.FC = () => {
  return (
    <Aside id="home-users">
      <ProfileCard />

      <div>
        <Callout>Sugerencias para ti</Callout>
        <ViewUserSuggestionsButton />
      </div>

      <CardGroup stack="vertical">
        <UserSuggestionCard />
        <UserSuggestionCard />
        <UserSuggestionCard />
        <UserSuggestionCard />
        <UserSuggestionCard />
        <UserSuggestionCard />
      </CardGroup>
    </Aside>
  );
};

export default HomeUsersAside;
