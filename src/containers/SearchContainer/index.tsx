import React, { useEffect, useState } from "react";
import Container from "../../components/layout/Container";
import SearchForm from "../../components/forms/Form/variants/SearchForm";
import SearchMain from "../../components/layout/Main/variants/SearchMain";
import CardGroup from "../../components/groups/CardGroup";
import SearchNotice from "../../components/utils/Notice/variants/SearchNotice";
import GreetingNotice from "../../components/utils/Notice/variants/GreetingNotice";
import UserSuggestionCard from "../../components/layout/Card/variants/UserSuggestionCard";

const SearchContainer: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
  }, [users]);

  return (
    <Container id="search">
      <SearchForm
        setUsers={(data) => {
          setUsers(data);
          setSearched(true);
        }}
      />
      <SearchMain>
        {searched ? (
          users.length <= 0 ? (
            <SearchNotice />
          ) : (
            <div>
              <CardGroup stack="vertical">
                {users.map((user) => (
                  <div key={user.userId}>
                    <UserSuggestionCard
                      userId={user.userId}
                      profilePictureURL={user.profilePictureURL}
                      username={user.username}
                    />
                  </div>
                ))}
              </CardGroup>
            </div>
          )
        ) : (
          <GreetingNotice />
        )}
      </SearchMain>
    </Container>
  );
};

export default SearchContainer;
