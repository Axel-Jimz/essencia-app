import { createSlice } from '@reduxjs/toolkit';
import { generateInitialState } from './functions/generateInitialState';

const initialState = generateInitialState();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = !state.value;
      return state;
    },
  },
});

export const { setTheme } = themeSlice.actions;
