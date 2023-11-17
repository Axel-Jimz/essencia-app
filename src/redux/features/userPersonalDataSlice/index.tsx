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
    setSavedPosts: (state, action: PayloadAction<{}[]>) => {
      state.savedPosts = action.payload;
      return state;
    },
    setSharedPosts: (state, action: PayloadAction<{}[]>) => {
      state.sharedPosts = action.payload;
      return state;
    },
    setBlockedUsers: (state, action: PayloadAction<{}[]>) => {
      state.blockedUsers = action.payload;
      return state;
    },
    setNotifications: (state, action: PayloadAction<{}[]>) => {
      state.notifications = action.payload;
      return state;
    },
    setViewedNotifications: (state, action: PayloadAction<boolean>) => {
      state.viewedNotifications = action.payload;
      return state;
    },
    setAccountCreated: (state, action: PayloadAction<string>) => {
      state.accountCreated = action.payload;
      return state;
    },
  },
});

export const {
  setUserId,
  setUsername,
  setBiography,
  setProfilePictureURL,
  setFollowers,
  setFollowing,
  setPosts,
  setSavedPosts,
  setSharedPosts,
  setBlockedUsers,
  setNotifications,
  setViewedNotifications,
  setAccountCreated,
} = userPersonalDataSlice.actions;
