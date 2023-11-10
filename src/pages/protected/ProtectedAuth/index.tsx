import React from 'react';
import { ProtectedAuthProps } from './props';
import useAuthStateListener from './hooks/useAuthStateListener';
import Loader from '../../loading/Loader';

const ProtectedAuth: React.FC<ProtectedAuthProps> = ({ children }) => {
  const { isLoading } = useAuthStateListener();

  if (isLoading) {
    return  <Loader />;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default ProtectedAuth;
