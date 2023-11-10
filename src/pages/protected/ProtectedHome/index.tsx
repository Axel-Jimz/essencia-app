import React from 'react';
import { ProtectedHomeProps } from './props';
import useHomeStateListener from './hooks/useHomeStateListener';

const ProtectedHome: React.FC<ProtectedHomeProps> = ({ children }) => {
    const { isLoading } = useHomeStateListener();

    if (isLoading) {
      return <h1>Home Loading...</h1>
    }

    return (
      <div>
        {children}
      </div>
    );
};

export default ProtectedHome;