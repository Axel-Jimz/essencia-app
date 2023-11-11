import React from "react";
import { UserModelProviderProps } from "./props";
import { UserModelContext } from "../../contexts/UserModelContext";
import useUserModel from "../../../models/global/useUserModel";

const UserModelProvider: React.FC<UserModelProviderProps> = ({ children }) => {
  const userModel = useUserModel();

  const { theme } = useUserModel();

  console.log(theme)

  return (
    <UserModelContext.Provider value={userModel}>
      <div className={`${theme ? 'theme-dark' : 'theme-light'}`}>
        {children}
      </div>
    </UserModelContext.Provider>
  );
};

export default UserModelProvider;
