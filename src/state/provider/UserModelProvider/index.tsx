import React from "react";
import { UserModelProviderProps } from "./types";
import { UserModelContext } from "../../contexts/UserModelContext";
import useUserModel from "../../../models/global/useUserModel";

const UserModelProvider: React.FC<UserModelProviderProps> = ({ children }) => {
  const userModel = useUserModel()

  return (
    <UserModelContext.Provider value={userModel}>
      {children}
    </UserModelContext.Provider>
  );
};

export default UserModelProvider;
