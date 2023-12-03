import React from "react";
import Notice from "../..";
import UserIcon from "../../../../icons/UserIcon";

const SuggestedUsersNotice: React.FC = () => {
  return (
    <Notice
      icon={<UserIcon />}
      title="No hay usuarios sugeridos"
      description="No hay usuarios sugeridos en este momento."
    />
  );
};

export default SuggestedUsersNotice;
