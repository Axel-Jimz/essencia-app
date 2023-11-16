import { createSlice } from '@reduxjs/toolkit';
import { generateInitialState } from './functions/generateInitialState';

const initialState = generateInitialState();

export const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    setMobileHomeNavbarVisibility: (state) => {
      state.mobileHomeNavbarVisibility = !state.mobileHomeNavbarVisibility;
      return state;
    },
  },
});

export const { setMobileHomeNavbarVisibility } = userInterfaceSlice.actions