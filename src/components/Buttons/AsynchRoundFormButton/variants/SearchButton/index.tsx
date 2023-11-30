import React from "react";
import AsynchRoundFormButton from "../..";
import SendIcon from "../../../../icons/SendIcon";

export interface SearchButtonProps {
  isSubmitting: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  isSubmitting,
}) => {
  return (
    <AsynchRoundFormButton
      icon={<SendIcon />}
      isSubmitting={isSubmitting}
      bg="blue"
    />
  );
};

export default SearchButton;
