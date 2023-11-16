// Redux Tookit
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Redux Thunk
import thunk from 'redux-thunk';
// Slices
import { themeSlice } from '../features/themeSlice';
import { userPersonalDataSlice } from '../features/userPersonalDataSlice';
import { userInterfaceSlice } from '../features/userInterfaceSlice';

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  userInterface: userInterfaceSlice.reducer,
  userPersonalData: userPersonalDataSlice.reducer,
})

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

// Create persistent reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

// Create persistor
export const persistor = persistStore(store);

// Infer the types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
