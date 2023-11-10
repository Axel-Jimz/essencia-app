import { createContext } from "react";
import { UserModelContextProps } from "./props";

export const UserModelContext = createContext<UserModelContextProps>({
    /* User Interface */
  theme: false,
  /* User Interface - Functions*/
  changeTheme: () => {},
  /* User Personal Data */
  userId: '',
  username: '',
  biography: '',
  profilePictureURL: '',
  profileCoverURL: '',
  followers: [],
  following: [],
  posts: [],
  accountCreated: '',
  online: false,
  /* User Personal Data  Functions */
  changeUserId: () => {},
  changeUsername: () => {},
  changeBiography: () => {},
  changeProfilePictureURL: () => {},
  changeProfileCoverURL: () => {},
  changeFollowers: () => {},
  changeFollowing: () => {},
  changePosts: () => {},
  changeAccountCreated: () => {},
  changeOnlineStatus: () => {},
});
  