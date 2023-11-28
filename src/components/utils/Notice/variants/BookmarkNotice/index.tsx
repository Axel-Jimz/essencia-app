import React from "react";
import Notice from "../..";
import SaveIcon from "../../../../icons/SaveIcon";

const BookmarkNotice: React.FC = () => {
  return (
    <Notice
      icon={<SaveIcon />}
      title="No hay publicaciones guardadas"
      description="¡Guarda tus publicaciónes favoritas para verlas más tarde! Haz clic en el botón de abajo para ir al inicio y empezar a guardar publicaciones."
      buttonContent="Ver publicaciones"
      buttonRedirectPath="/"
    />
  );
};

export default BookmarkNotice;
