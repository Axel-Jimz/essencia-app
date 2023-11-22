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
  updateUserPersonalData: () => {},
  /* User Create Functions */
  createPost: () => {},  // Error por promesa.
  /* User Create Functions */
  getPersonalData: () => {},  // Error por promesa.
  /* User Snapshot Functions */
  watchBlockedUsers: () => {}, // Error por promesa. (Unsubscribe) 
  watchPostLikes: () => {}, // Error por promesa. (Unsubscribe)
  watchPostReports: () => {}, // Error por promesa. (Unsubscribe)
  watchPostShares: () => {}, // Error por promesa. (Unsubscribe)
  watchSavedPosts: () => {}, // Error por promesa. (Unsubscribe)
});
  