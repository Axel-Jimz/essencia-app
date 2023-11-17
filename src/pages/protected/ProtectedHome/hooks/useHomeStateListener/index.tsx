import { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../services/firebase/config";

import { useHomeStateListenerProps } from "../../props";


const useHomeStateListener = (): useHomeStateListenerProps => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const { handlerUserAuth } = useContext(UserModelContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      user && await handlerUserAuth(user);

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
