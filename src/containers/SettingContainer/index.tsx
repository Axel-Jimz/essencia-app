import React from "react";
import Container from "../../components/layout/Container";
import SettingMain from "../../components/layout/Main/variants/SettingMain";
import Subtitle from "../../components/typography/Heading/variants/Subtitle";
import Description from "../../components/typography/Paragraph/variants/Description";
import UpdatePersonalDataForm from "../../components/forms/Form/variants/UpdatePersonalDataForm";
import Divider from "../../components/utils/Divider";
import Callout from "../../components/typography/Heading/variants/Callout";
import ToggleThemeButton from "../../components/buttons/RoundButton/variants/ToggleThemeButton";

import "./styles/index.css";

const SettingContainer: React.FC = () => {
  return (
    <Container id="setting">
      <SettingMain>

        <Subtitle>Informacion Personal</Subtitle>
        <Description>
          Personaliza tu perfil a tu gusto. Cambia tu foto de perfil, nombre de
          usuario y biografía para reflejar quién eres y compartir información
          relevante sobre ti.
        </Description>
        <UpdatePersonalDataForm />

        <Divider bg="gray" />

        <Subtitle>Interfaz de usuario</Subtitle>
        <Description>
          Personaliza la apariencia de la aplicación según tus preferencias.
          Cambia el tema de la aplicación para adaptarlo a tu estilo y mejorar
          tu experiencia de uso.
        </Description>
        <div>
          <Callout>Tema</Callout>
          <ToggleThemeButton />
        </div>

      </SettingMain>
    </Container>
  );
};

export default SettingContainer;
