import React from "react";
import Main from "../..";
import Title from "../../../../typography/Heading/variants/Title";
import Description from "../../../../typography/Paragraph/variants/Description";
import Highlight from "../../../../typography/Highlight";
import SignInWithGoogleButton from "../../../../buttons/AsynchRectangleButton/variants/SignWithGoogleButton";

import "./styles/index.css";

const AuthMain: React.FC = () => {
  return (
    <Main id="auth">
      <Title>
        ¡Bienvenido a <Highlight color="blue">Essencia</Highlight>!
      </Title>
      <Description>
        Conéctate, comparte tus pensamientos y explora intereses comunes en una
        plataforma intuitiva y segura. Únete y sumérgete en la autenticidad y la
        conexión genuina.
      </Description>
      <SignInWithGoogleButton />
    </Main>
  );
};

export default AuthMain;
