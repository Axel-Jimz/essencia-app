export interface userPersonalDataStateProps {
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
}
