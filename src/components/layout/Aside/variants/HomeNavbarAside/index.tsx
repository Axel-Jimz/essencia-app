import React, { useContext } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

import Aside from "../..";

import Logo from "../../../../brand/Logo";

import Divider from "../../../../utils/Divider";

import ButtonGroup from "../../../../groups/ButtonGroup";

import GoToHomePageButton from "../../../../buttons/NavRectangleButton/variants/GoToHomePageButton";
import GoToProfilePageButton from "../../../../buttons/NavRectangleButton/variants/GoToProfilePageButton";
import GoToSearchPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSearchPageButton";
import GoToNotificationsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNotificationsPageButton";
import GoToSharesPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSharesPageButton";
import GoToBookmarksButton from "../../../../buttons/NavRectangleButton/variants/GoToBookmarksPageButton";
import GoToSettingPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSettingPageButton";

import "./styles/index.css";

const HomeNavbarAside: React.FC = () => {
  const { userId } = useContext(UserModelContext)

  return (
    <Aside id="home-navbar">
      <div>
        <Logo textColor="blue" />

        <Divider bg="gray" bgOpacity="80" />

        <ButtonGroup stack="vertical">
          <GoToHomePageButton />
          <GoToProfilePageButton navigateTo={userId} />
          <GoToSearchPageButton />
          <GoToNotificationsPageButton />
          <GoToSharesPageButton />
          <GoToBookmarksButton />
        </ButtonGroup>
      </div>

      <ButtonGroup stack="vertical">
        <GoToSettingPageButton />
      </ButtonGroup>
    </Aside>
  );
};

export default HomeNavbarAside;
