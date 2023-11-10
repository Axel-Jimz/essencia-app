import { useAppDispatch } from "../../../redux/redux-hooks";
import { useUserInterfaceFunctionsProps } from "./props";

import { setTheme } from "../../../redux/features/themeSlice";

const useUserInterfaceFunctions = (): useUserInterfaceFunctionsProps => {
  const dispatch = useAppDispatch();

  const changeTheme = () => dispatch(setTheme());

  return {
    changeTheme,
  };
};

export default useUserInterfaceFunctions;
