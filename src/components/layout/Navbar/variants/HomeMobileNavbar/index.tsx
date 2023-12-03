import React, { useContext } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

import Navbar from "../..";

import ButtonGroup from "../../../../groups/ButtonGroup";
import GoToHomePageButton from "../../../../buttons/NavRectangleButton/variants/GoToHomePageButton";
import GoToProfilePageButton from "../../../../buttons/NavRectangleButton/variants/GoToProfilePageButton";
import GoToSearchPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSearchPageButton";
import GoToNotificationsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNotificationsPageButton";
import GoToBookmarksButton from "../../../../buttons/NavRectangleButton/variants/GoToBookmarksPageButton";
import GoToSharesPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSharesPageButton";
import GoToNewsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNewsPageButton";
import GoToSettingPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSettingPageButton";
import SignOutButton from "../../../../buttons/AsynchRectangleButton/variants/SignOutButton";

import "./styles/index.css";
import "./styles/theme.css";

const HomeMobileNavbar: React.FC = () => {
  const { userId } = useContext(UserModelContext);

  return (
    <Navbar id="home-mobile">
      <ButtonGroup stack="vertical">
        <GoToHomePageButton />
        <GoToProfilePageButton navigateTo={userId}  />
        <GoToSearchPageButton />
        <GoToNotificationsPageButton />
        <GoToSharesPageButton />
        <GoToBookmarksButton />
      </ButtonGroup>

      <ButtonGroup stack="vertical">
        <GoToSettingPageButton />
        <SignOutButton />
      </ButtonGroup>
    </Navbar>
  );
};

export default HomeMobileNavbar;
