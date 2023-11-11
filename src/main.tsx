import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

import { RouterProvider } from "react-router-dom";
import { router } from './router';

import UserModelProvider from './state/providers/UserModelProvider';
import NotificationsProvider from './state/providers/NotificationsProvider';

import "./styles/normalize/index.css";
import "./styles/variables/index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <UserModelProvider>
            <NotificationsProvider>
              <RouterProvider router={router} />
            </NotificationsProvider>
          </UserModelProvider>
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)
