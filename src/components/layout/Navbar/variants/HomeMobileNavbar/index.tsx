import React from "react";
import Navbar from "../..";

import ButtonGroup from "../../../../groups/ButtonGroup";
import GoToHomePageButton from "../../../../buttons/NavRectangleButton/variants/GoToHomePageButton";
import GoToProfilePageButton from "../../../../buttons/NavRectangleButton/variants/GoToProfilePageButton";
import GoToExplorePageButton from "../../../../buttons/NavRectangleButton/variants/GoToExplorePageButton";
import GoToNotificationsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNotificationsPageButton";
import GoToNewsPageButton from "../../../../buttons/NavRectangleButton/variants/GoToNewsPageButton";
import GoToCreatePageButton from "../../../../buttons/NavRectangleButton/variants/GoToCreatePageButton";
import GoToSettingPageButton from "../../../../buttons/NavRectangleButton/variants/GoToSettingPageButton";

import "./styles/index.css";
import "./styles/theme.css";
import SignOutButton from "../../../../buttons/AsynchRectangleButton/variants/SignOutButton";

const HomeMobileNavbar: React.FC = () => {
  return (
    <Navbar id="home-mobile">
      <ButtonGroup stack="vertical">
        <GoToHomePageButton />
        <GoToProfilePageButton />
        <GoToExplorePageButton />
        <GoToNotificationsPageButton />
        <GoToNewsPageButton />
        <GoToCreatePageButton />
      </ButtonGroup>

      <ButtonGroup stack="vertical">
        
        <GoToSettingPageButton />
        <SignOutButton />
      </ButtonGroup>
    </Navbar>
  );
};

export default HomeMobileNavbar;
