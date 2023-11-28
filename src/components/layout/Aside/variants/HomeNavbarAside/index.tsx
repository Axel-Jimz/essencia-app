import React, { useContext } from "react";
import Aside from "../..";

import Logo from "../../../../brand/Logo";

import Divider from "../../../../utils/Divider";

import ButtonGroup from "../../../../groups/ButtonGroup";

import GoToHomePageButton from "../../../../buttons/NavRectangleButton/variants/GoToHomePageButton";
import GoToProfilePageButton from "../../../../buttons/NavRectangleButton/variants/GoToProfilePageButton";
import GoToExplorePageButton from "../../../../buttons/NavRectangleButton/variants/GoToExplorePageButton";
import GoToNotificationsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNotificationsPageButton";
import GoToBookmarksButton from "../../../../buttons/NavRectangleButton/variants/GoToBookmarksPageButton";
import GoToNewsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNewsPageButton";
import GoToSettingPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSettingPageButton";

import "./styles/index.css";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

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
          <GoToExplorePageButton />
          <GoToNotificationsPageButton />
          <GoToBookmarksButton />
        </ButtonGroup>
      </div>

      <ButtonGroup stack="vertical">
        <GoToNewsPageButton />
        <GoToSettingPageButton />
      </ButtonGroup>
    </Aside>
  );
};

export default HomeNavbarAside;
