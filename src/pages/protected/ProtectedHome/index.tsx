import React from 'react';
import { ProtectedHomeProps } from './props';
import useHomeStateListener from './hooks/useHomeStateListener';
import Loader from '../../loading/Loader';

const ProtectedHome: React.FC<ProtectedHomeProps> = ({ children }) => {
    const { isLoading } = useHomeStateListener();

    if (isLoading) {
      return <Loader />
    } 

    return (
      <div>
        {children}
      </div>
    );
};

export default ProtectedHome;