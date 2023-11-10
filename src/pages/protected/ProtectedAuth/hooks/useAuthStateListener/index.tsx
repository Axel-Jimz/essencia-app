import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../services/firebase/config";

import { useAuthStateListenerProps } from "../../props";

const useAuthStateListener = (): useAuthStateListenerProps => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/auth");
        setIsLoading(false);
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
