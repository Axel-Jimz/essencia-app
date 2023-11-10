export interface UserModelContextProps {
  /* User Interface */
  theme: boolean;
  /* User Interface - Functions*/
  changeTheme: () => void;
  /* User Personal Data */
  userId: string;
  username: string;
  biography: string;
  profilePictureURL: string;
  profileCoverURL: string;
  followers: {}[];
  following: {}[];
  posts: {}[];
  accountCreated: string;
  online: boolean;
  /* User Personal Data  Functions */
  changeUserId: (value: string) => void;
  changeUsername: (value: string) => void;
  changeBiography: (value: string) => void;
  changeProfilePictureURL: (value: string) => void;
  changeProfileCoverURL: (value: string) => void;
  changeFollowers: (value: {}[]) => void;
  changeFollowing: (value: {}[]) => void;
  changePosts: (value: {}[]) => void;
  changeAccountCreated: (value: string) => void;
  changeOnlineStatus: (value: boolean) => void;
}
