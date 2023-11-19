import { firebaseCreatePost } from "../../../services/firebase/functions/data/create/firebaseCreatePost";
import { useUserCreateFunctionsProps  } from "./props";

const useUserCreateFunctions = (): useUserCreateFunctionsProps => {

  const createPost = async (data: any, userId: string) => {
    try {
      await firebaseCreatePost(data, userId);
    } catch (error) {
      console.error(error);
    }
  };
 
  return {
    createPost
  };
};

export default useUserCreateFunctions;
