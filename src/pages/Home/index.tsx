import React, { useContext } from "react";
import { UserModelContext } from "../../state/contexts/UserModelContext";

const Home: React.FC = () => {
  const { signOutUser } = useContext(UserModelContext);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={signOutUser}>Cerrar sesion</button>
    </div>
  );
};

export default Home;
