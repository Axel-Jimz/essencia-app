import { Unsubscribe } from "firebase/firestore";

export interface UserModelContextProps {
  /* User Interface */
  theme: boolean;
  mobileHomeNavbarVisibility: boolean;
  /* User Interface - Functions*/
  changeTheme: () => void;
  toggleMobileHomeNavbarVisibility: () => void;
  /* User Auth - Functions */
  signInWithGoogle: () => void;
  signOutUser: () => void;
  handlerUserAuth: (user: any) => Promise<void>;
  /* User Personal Data */
  userId: string;
  username: string;
  biography: string;
  profilePictureURL: string;
  followers: {}[];
  following: {}[];
  posts: {}[];
  savedPosts: {}[];
  sharedPosts: {}[];
  blockedUsers: {}[];
  notifications: {}[];
  viewedNotifications: boolean;
  accountCreated: string;
  online: boolean;
  /* User Personal Data  Functions */
  changeUserId: (value: string) => void;
  changeUsername: (value: string) => void;
  changeBiography: (value: string) => void;
  changeProfilePictureURL: (value: string) => void;
  changeFollowers: (value: {}[]) => void;
  changeFollowing: (value: {}[]) => void;
  changePosts: (value: {}[]) => void;
  changeSavedPosts: (value: {}[]) => void;
  changeSharedPosts: (value: {}[]) => void;
  changeBlockedUsers: (value: {}[]) => void;
  changeNotifications: (value: {}[]) => void;
  changeViewedNotifications: (value: boolean) => void;
  changeAccountCreated: (value: string) => void;
  updateUserPersonalData: (data: any) => void;
  /* User Create Functions */
  createPost: (data: any, userId: string) => Promise<void>;
  /* User Create Functions */
  getPersonalData: (user: any) => void;
  /* User Snapshot Functions */
  watchBlockedUsers: (userId: string, callback: (blockedUsersData: any[]) => void) =>  Unsubscribe;
  watchPostLikes: (postId: string, callback: (likesData: any[]) => void) => Unsubscribe;
  watchPostReports: (postId: string, callback: (reportsData: any[]) => void) => Unsubscribe;
  watchPostShares: (postId: string, callback: (sharesData: any[]) => void) => Unsubscribe;
  watchSavedPosts: (postId: string, callback: (savedPostsData: any[]) => void) => Unsubscribe;
}
