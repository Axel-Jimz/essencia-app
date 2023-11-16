import { useAppSelector } from "../../../redux/redux-hooks";
import { useUserInterfaceDataProps } from "./props";

const useUserInterfaceData = (): useUserInterfaceDataProps => {
    const theme = useAppSelector((state) => state.theme.value);
    const mobileHomeNavbarVisibility = useAppSelector((state) => state.userInterface.mobileHomeNavbarVisibility);

    return {
      theme,
      mobileHomeNavbarVisibility,
    };
  };
  
  export default useUserInterfaceData;
  