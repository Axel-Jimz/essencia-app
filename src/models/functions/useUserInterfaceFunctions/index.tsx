import { useAppDispatch } from "../../../redux/redux-hooks";
import { useUserInterfaceFunctionsProps } from "./props";

import { setTheme } from "../../../redux/features/themeSlice";
import { setMobileHomeNavbarVisibility } from "../../../redux/features/userInterfaceSlice";

const useUserInterfaceFunctions = (): useUserInterfaceFunctionsProps => {
  const dispatch = useAppDispatch();

  const changeTheme = () => dispatch(setTheme());
  const toggleMobileHomeNavbarVisibility = () => dispatch(setMobileHomeNavbarVisibility());

  return {
    changeTheme,
    toggleMobileHomeNavbarVisibility,
  };
};

export default useUserInterfaceFunctions;
