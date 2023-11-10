import React from 'react';
import { ProtectedAuthProps } from './props';
import useAuthStateListener from './hooks/useAuthStateListener';

const ProtectedAuth: React.FC<ProtectedAuthProps> = ({ children }) => {
  const { isLoading } = useAuthStateListener();

  if (isLoading) {
    return  <h1>Auth Loading...</h1>;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default ProtectedAuth;
