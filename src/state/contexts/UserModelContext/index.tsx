import { createContext } from "react";
import { UserModelContextProps } from "./props";

export const UserModelContext = createContext<UserModelContextProps>({
    /* User Interface */
  theme: false,
  mobileHomeNavbarVisibility: false,
  /* User Interface - Functions*/
  changeTheme: () => {},
  toggleMobileHomeNavbarVisibility: () => {},
  /* User Auth - Functions */
  signInWithGoogle: () => {},
  signOutUser: () => {},
  handlerUserAuth: () => {}, // Error por promesa.
  /* User Personal Data */
  userId: '',
  username: '',
  biography: '',
  profilePictureURL: '',
  profileCoverURL: '',
  followers: [],
  following: [],
  posts: [],
  savedPosts: [],
  sharedPosts: [],
  blockedUsers: [],
  notifications: [],
  viewedNotifications: false,
  accountCreated: '',
  online: false,
  /* User Personal Data  Functions */
  changeUserId: () => {},
  changeUsername: () => {},
  changeBiography: () => {},
  changeProfilePictureURL: () => {},
  changeFollowers: () => {},
  changeFollowing: () => {},
  changePosts: () => {},
  changeSavedPosts: () => {},
  changeSharedPosts: () => {},
  changeBlockedUsers: () => {},
  changeViewedNotifications: () => {},
  changeAccountCreated: () => {},
});
  