import React from "react";
import NavRoundButton from "../..";
import SearchIcon from "../../../../icons/SearchIcon";

const GoToExplorePageButton: React.FC = () => {
  return (
    <NavRoundButton icon={<SearchIcon />} navigateTo="/explore" bg="white" />
  );
};

export default GoToExplorePageButton;
