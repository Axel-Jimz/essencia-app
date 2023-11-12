import React from "react";
import NavRoundButton from "../..";
import GlobeIcon from "../../../../icons/GlobeIcon";

const GoToNewsPageButton: React.FC = () => {
  return (
    <NavRoundButton
      icon={<GlobeIcon />}
      navigateTo="/news"
      bg="white"
      tooltipMessage="Ver ultimas noticias"
    />
  );
};

export default GoToNewsPageButton;
