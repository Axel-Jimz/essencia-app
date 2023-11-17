import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../services/firebase/config";

import { useAuthStateListenerProps } from "../../props";

const useAuthStateListener = (): useAuthStateListenerProps => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  console.log('ejectutando useAuthStateListener')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        navigate("/auth");
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);
  

  return {
    isLoading,
  };
};

export default useAuthStateListener;
