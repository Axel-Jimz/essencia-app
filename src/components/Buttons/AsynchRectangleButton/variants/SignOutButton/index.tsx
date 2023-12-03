import React, { useContext } from "react";
import AsynchRectangleButton from "../..";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import SignOutIcon from "../../../../icons/SignOutIcon";

const SignOutButton: React.FC = () => {
    const { signOutUser } = useContext(UserModelContext);
  
    return (
      <AsynchRectangleButton
        icon={<SignOutIcon />}
        onClick={signOutUser}
        bg="red"
      >
        Salir
      </AsynchRectangleButton>
    );
  };
  
  export default SignOutButton;
  