import React from "react";
import Aside from "../..";

import GoToProfilePageButton from "../../../../buttons/NavRectangleButton/variants/GoToProfilePageButton";
import GoToHomePageButton from "../../../../buttons/NavRectangleButton/variants/GoToHomePageButton";
import GoToSettingPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSettingPageButton";
import GoToNotificationsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNotificationsPageButton";
import GoToNewsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNewsPageButton";

import GoToExplorePageButton from "../../../../buttons/NavRectangleButton/variants/GoToExplorePageButton";
import SignOutButton from "../../../../buttons/AsynchRectangleButton/variants/SignOutButton";
import ButtonGroup from "../../../../groups/ButtonGroup";
import GoToCreatePageButton from "../../../../buttons/NavRectangleButton/variants/GoToCreatePageButton";

import "./styles/index.css";
import Logo from "../../../../brand/Logo";
import Divider from "../../../../utils/Divider";

const HomeNavbarAside: React.FC = () => {
  return (
    <Aside id="home-navbar">
      <div>
        <Logo textColor="blue" />

        <Divider bg="gray" />

        <ButtonGroup stack="vertical">
          <GoToHomePageButton />
          <GoToProfilePageButton />
          <GoToExplorePageButton />
          <GoToNotificationsPageButton />
          <GoToNewsPageButton />
        </ButtonGroup>
      </div>

      <ButtonGroup stack="vertical">
        <GoToCreatePageButton />
        <GoToSettingPageButton />
      </ButtonGroup>
    </Aside>
  );
};

export default HomeNavbarAside;
