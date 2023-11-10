import { userPersonalDataStateProps } from "../types";

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