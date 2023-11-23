import React from "react";
import NavRoundButton from "../..";
import LeftArrowIcon from "../../../../icons/LeftArrowIcon";

const BackToHomePageButton: React.FC = () => {
  return (
    <NavRoundButton icon={<LeftArrowIcon />} navigateTo="/" bg="blue" tooltipMessage="Volver"/>
  );
};

export default BackToHomePageButton;
