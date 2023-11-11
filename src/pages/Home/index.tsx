import React, { useContext } from "react";
import { UserModelContext } from "../../state/contexts/UserModelContext";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  const { signOutUser } = useContext(UserModelContext)

  return (
    <>
      <button onClick={signOutUser}>Salir</button>
      <Outlet />
    </>
  );
};

export default Home;
