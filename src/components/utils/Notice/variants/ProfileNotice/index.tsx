import React from "react";
import Notice from "../..";
import ImageIcon from "../../../../icons/ImageIcon";

const ProfileNotice: React.FC = () => {
  return (
    <Notice
      icon={<ImageIcon />}
      title="Aún no has creado publicaciones"
      description="¡Anímate a compartir tus pensamientos, ideas o experiencias! Haz clic en el botón de abajo para ir al inicio y crear tu primera publicación."
      buttonContent="Crear publicación"
      buttonRedirectPath="/"
    />
  );
};

export default ProfileNotice;
