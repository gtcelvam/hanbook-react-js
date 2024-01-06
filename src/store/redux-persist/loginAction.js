import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

//local imports
import { LOGIN, LOGOUT } from "../../Constants";

const useLoginService = () => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    dispatch({ type: LOGIN });
    toast.success("User LoggedIn Succesfully!");
  }, []);

  const handleLogout = useCallback(() => dispatch({ type: LOGOUT }), []);

  return { handleLogin, handleLogout };
};

export default useLoginService;
