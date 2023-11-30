import React from "react";
import Notice from "../..";
import SearchIcon from "../../../../icons/SearchIcon";

const GreetingNotice: React.FC = () => {
  return (
    <Notice
      icon={<SearchIcon />}
      title="¡Bienvenido a la búsqueda de usuarios!"
      description="Utiliza la barra de búsqueda para encontrar y conectar con otros usuarios. ¡Explora y conecta con personas afines a ti!"
    />
  );
};

export default GreetingNotice;
