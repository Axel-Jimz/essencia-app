import { useAppSelector } from "../../../redux/redux-hooks";
import { useUserInterfaceDataProps } from "./props";

const useUserInterfaceData = (): useUserInterfaceDataProps => {
    const theme = useAppSelector((state) => state.theme.value);

    return {
      theme,
    };
  };
  
  export default useUserInterfaceData;
  