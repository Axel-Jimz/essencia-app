import React, { useContext } from "react";
import AsynchRectangleButton from "../..";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import GoogleIcon from "../../../../icons/GoogleIcon";

const SignInWithGoogleButton: React.FC = () => {
  const { signInWithGoogle } = useContext(UserModelContext);

  return (
    <AsynchRectangleButton
      icon={<GoogleIcon />}
      onClick={signInWithGoogle}
      bg="blue"
      successTitle="Inicio de sesión exitoso"
      successDescription="Has iniciado sesión correctamente con tu cuenta de Google."
      errorTitle="Error en el inicio de sesión"
      errorDescription="No se pudo iniciar sesión con tu cuenta de Google. Por favor, inténtalo de nuevo."
    >
      Continuar con Google
    </AsynchRectangleButton>
  );
};

export default SignInWithGoogleButton;
