import { useUserReadFunctionsProps  } from "./props";

import { firebaseGetPersonalData } from "../../../services/firebase/functions/data/read/firebaseGetPersonalData";

const useUserReadFunctions = (): useUserReadFunctionsProps => {

  const getPersonalData = async (user: any) => {
    try {
      const data = await  firebaseGetPersonalData(user);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
 
  return {
    getPersonalData
  };
};

export default useUserReadFunctions;
