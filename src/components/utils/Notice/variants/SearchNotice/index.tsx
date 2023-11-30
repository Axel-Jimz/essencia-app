import React from "react";
import Notice from "../..";
import SearchIcon from "../../../../icons/SearchIcon";

const SearchNotice: React.FC = () => {
  return (
    <Notice
      icon={<SearchIcon />}
      title="No se encontraron usuarios"
      description="Realiza una búsqueda para encontrar usuarios. ¡Anímate a buscar y conectar con otras personas!"
    />
  );
};

export default SearchNotice;
