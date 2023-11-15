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
        successTitle="Sesión cerrada"
        successDescription="Has cerrado sesión correctamente."
        errorTitle="Error al cerrar sesión"
        errorDescription="No se pudo cerrar sesión. Por favor, inténtalo de nuevo."
      >
        Salir
      </AsynchRectangleButton>
    );
  };
  
  export default SignOutButton;
  