import React, { useContext } from "react";
import AsynchRoundButton from "../..";
import SignOutIcon from "../../../../icons/SignOutIcon";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

const SignOutButton: React.FC = () => {
  const { signOutUser } = useContext(UserModelContext);

  return (
    <AsynchRoundButton
      icon={<SignOutIcon />}
      onClick={signOutUser}
      bg="red"
      tooltipMessage="Salir"
    />
  );
};

export default SignOutButton;
