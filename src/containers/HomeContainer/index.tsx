import React, { useContext } from "react";
import { UserModelContext } from "../../state/contexts/UserModelContext";

import Container from "../../components/layout/Container";
import HomeNavbar from "../../components/layout/Navbar/variants/HomeNavbar";

import { Outlet } from "react-router-dom";

import "./styles/index.css";
import PostCard from "../../components/layout/Card/variants/PostCard";

const HomeContainer: React.FC = () => {
  const { signOutUser } = useContext(UserModelContext);
 
  return (
    <Container id="home">
      <HomeNavbar />
      <div>
        <Outlet />
        <button onClick={signOutUser}>Salir</button>
        <br />
          
          <PostCard />

      </div>
    </Container>
  );
};

export default HomeContainer;