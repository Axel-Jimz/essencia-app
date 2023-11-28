import React from "react";
import NavRoundButton from "../..";
import SettingIcon from "../../../../icons/SettingIcon";

const GoToSettingPageButton: React.FC = () => {
  return (
    <NavRoundButton icon={<SettingIcon />} navigateTo="/setting" bg="white" tooltipMessage="Editar"/>
  );
};

export default GoToSettingPageButton;
