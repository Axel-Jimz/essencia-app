import { userPersonalDataStateProps } from "../props";

export const generateInitialState = (): userPersonalDataStateProps => ({
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
  });