import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../services/firebase/config";

import { useHomeStateListenerProps } from "../../props";

const useHomeStateListener = (): useHomeStateListenerProps => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
        setIsLoading(false);
      } else {
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

export default useHomeStateListener;
