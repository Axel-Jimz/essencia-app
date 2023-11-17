import { userPersonalDataStateProps } from "../props";

export const generateInitialState = (): userPersonalDataStateProps => ({
  userId: "",
  username: "",
  biography: "",
  profilePictureURL: "",
  followers: [],
  following: [],
  posts: [],
  savedPosts: [],
  sharedPosts: [],
  blockedUsers: [],
  notifications: [],
  viewedNotifications: false,
  accountCreated: "",
});
