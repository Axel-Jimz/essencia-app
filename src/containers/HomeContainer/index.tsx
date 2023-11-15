import React from "react";

import Container from "../../components/layout/Container";

import HomeNavbarAside from "../../components/layout/Aside/variants/HomeNavbarAside";
import HomeUsersAside from "../../components/layout/Aside/variants/HomeUsersAside";

import { Outlet } from "react-router-dom";

import "./styles/index.css";
import HomeMain from "../../components/layout/Main/variants/HomeMain";
import BreakpointRenderer from "../../components/renderers/BreakpointRenderer";


const HomeContainer: React.FC = () => {
  return (
    <Container id="home">
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
