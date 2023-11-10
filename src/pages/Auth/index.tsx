import React, { useContext } from 'react';
import { UserModelContext } from '../../state/contexts/UserModelContext';

const Auth: React.FC = () => {
  const { signInWithGoogle } = useContext(UserModelContext);

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={signInWithGoogle}>Ingresar con google</button>
    </div>
  );
};

export default Auth;