import React, { useContext } from "react";
import { UserModelContext } from "../../state/contexts/UserModelContext";

import Container from "../../components/layout/Container";
import BreakpointRenderer from "../../components/renderers/BreakpointRenderer";
import HomeNavbar from "../../components/layout/Navbar/variants/HomeNavbar";
import HomeMain from "../../components/layout/Main/variants/HomeMain";
import HomeMobileNavbar from "../../components/layout/Navbar/variants/HomeMobileNavbar";
import HomeNavbarAside from "../../components/layout/Aside/variants/HomeNavbarAside";
import HomeUsersAside from "../../components/layout/Aside/variants/HomeUsersAside";

import { Outlet } from "react-router-dom";

import "./styles/index.css";

const HomeContainer: React.FC = () => {
  const { mobileHomeNavbarVisibility } = useContext(UserModelContext);

  return (
    <Container id="home">
      <BreakpointRenderer minWidth="md">
        <HomeNavbar />
      </BreakpointRenderer>

      {mobileHomeNavbarVisibility && <HomeMobileNavbar />}

      <HomeMain>
        <BreakpointRenderer maxWidth="md">
          <HomeNavbarAside />
        </BreakpointRenderer>

        <Outlet />

        <BreakpointRenderer maxWidth="lg">
          <HomeUsersAside />
        </BreakpointRenderer>
      </HomeMain>
    </Container>
  );
};

export default HomeContainer;
