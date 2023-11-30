import React from "react";
import Notice from "../..";
import ShareIcon from "../../../../icons/ShareIcon";

const SharesNotice: React.FC = () => {
  return (
    <Notice
      icon={<ShareIcon active={false} />}
      title="No hay publicaciones compartidas"
      description="Comparte tus publicaciónes favoritas! Haz clic en el botón de abajo para ir al inicio y empezar a compartir publicaciones."
      buttonContent="Ver publicaciones"
      buttonRedirectPath="/"
    />
  );
};

export default SharesNotice;
