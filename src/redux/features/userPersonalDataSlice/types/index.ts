export interface userPersonalDataStateProps {
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
  }
  