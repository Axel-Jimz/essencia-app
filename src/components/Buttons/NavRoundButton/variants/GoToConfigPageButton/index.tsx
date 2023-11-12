import React from "react";
import NavRoundButton from "../..";
import SettingIcon from "../../../../icons/SettingIcon";

const GoToConfigPageButton: React.FC = () => {
  return (
    <NavRoundButton
      icon={<SettingIcon />}
      navigateTo="/setting"
      bg="white"
      tooltipMessage="Ir a la configuracion"
    />
  );
};

export default GoToConfigPageButton;
