import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../services/firebase/config";

import { useHomeStateListenerProps } from "../../props";
import { firebaseHandlerUserAuth } from "../../../../../services/firebase/functions/auth/firebaseHandlerUserAuth";

const useHomeStateListener = (): useHomeStateListenerProps => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('ejectutando useHomeStateListener')

      user && await firebaseHandlerUserAuth(user);

      user ? setIsLoading(false) : navigate("/auth");
     
    });
  
    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  return {
    isLoading,
  };
};

export default useHomeStateListener;
