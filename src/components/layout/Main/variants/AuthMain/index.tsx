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
      ¡Bienvenido a mi proyecto! Aquí podrás explorar una demostración de mis habilidades en programación a través de esta aplicación. ¡Disfruta y descubre lo que puedo lograr en el mundo del desarrollo de software!".
      </Description>
      <SignInWithGoogleButton />
    </Main>
  );
};

export default AuthMain;
