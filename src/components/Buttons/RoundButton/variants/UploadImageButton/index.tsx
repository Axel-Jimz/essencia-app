import React from "react";
import RoundButton from "../..";
import UploadImageIcon from "../../../../icons/UploadImageIcon";
import CloseIcon from "../../../../icons/CloseIcon";

export interface UploadImageButtonProps {
  showImageInput: boolean;
  onClick: any;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({ showImageInput, onClick }) => {

  const icon = showImageInput ? <CloseIcon /> : <UploadImageIcon />;
  const bg = showImageInput ? "red" : "blue";
  const tooltipMessage = showImageInput ? "Cerrar" : "Subir imagen"

  return (
    <RoundButton
      icon={icon}
      onClick={onClick}
      bg={bg}
      tooltipMessage={tooltipMessage}
    />
  );
};

export default UploadImageButton;
