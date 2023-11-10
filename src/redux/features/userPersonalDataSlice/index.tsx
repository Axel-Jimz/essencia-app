import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { generateInitialState } from './functions/generateInitialState';

const initialState = generateInitialState();

export const userPersonalDataSlice = createSlice({
  name: 'userPersonalData',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      return state;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      return state;
    },
    setBiography: (state, action: PayloadAction<string>) => {
      state.biography = action.payload;
      return state;
    },
    setProfilePictureURL: (state, action: PayloadAction<string>) => {
      state.profilePictureURL = action.payload;
      return state;
    },
    setProfileCoverURL: (state, action: PayloadAction<string>) => {
      state.profileCoverURL = action.payload;
      return state;
    },
    setFollowers: (state, action: PayloadAction<{}[]>) => {
      state.followers = action.payload;
      return state;
    },
    setFollowing: (state, action: PayloadAction<{}[]>) => {
      state.following = action.payload;
      return state;
    },
    setPosts: (state, action: PayloadAction<{}[]>) => {
      state.posts = action.payload;
      return state;
    },
    setAccountCreated: (state, action: PayloadAction<string>) => {
      state.accountCreated = action.payload;
      return state;
    },
    setOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.online = action.payload;
      return state;
    },
  },
});

export const {
  setUserId,
  setUsername,
  setBiography,
  setProfilePictureURL,
  setProfileCoverURL,
  setFollowers,
  setFollowing,
  setPosts,
  setAccountCreated,
  setOnlineStatus,
} = userPersonalDataSlice.actions;
