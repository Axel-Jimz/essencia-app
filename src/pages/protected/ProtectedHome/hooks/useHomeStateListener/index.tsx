import { useState, useEffect, useContext } from "react";

import { useHomeStateListenerProps } from "../../props";

import { useNavigate } from "react-router-dom";

import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../services/firebase/config";



const useHomeStateListener = (): useHomeStateListenerProps => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const { handlerUserAuth, getPersonalData, updateUserPersonalData } = useContext(UserModelContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await handlerUserAuth(user);
        const data = await getPersonalData(user);
        updateUserPersonalData(data);
      }

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
