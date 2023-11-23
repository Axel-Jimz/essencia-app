import React from "react";
import AsynchRoundFormButton from "../..";
import SendIcon from "../../../../icons/SendIcon";

export interface CreateCommentButtonProps {
  isSubmitting: boolean;
}

const CreateCommentButton: React.FC<CreateCommentButtonProps> = ({
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

export default CreateCommentButton;
