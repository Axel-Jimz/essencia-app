import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface userInterfaceSlice {
  theme: boolean;
}

function generateInitialState(): userInterfaceSlice {
  return {
    property: undefined,
  };
}

const initialState = generateInitialState();

export const nameSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    reducer: (state, action: PayloadAction<undefined>) => {
      state.property = action.payload;
      return state;
    },
  },
});

export const { reducer } = nameSlice.actions