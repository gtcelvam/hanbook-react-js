import { useSelector } from "react-redux";
import useLoginService from "../store/redux-persist/loginAction";

const ReduxPersistComponent = () => {
  //state values
  const isLoggedIn = useSelector((state) => state.login);

  const { handleLogin, handleLogout } = useLoginService();

  //functions
  const handleLogService = () => (isLoggedIn ? handleLogout() : handleLogin());

  return (
    <div>
      <p>Redux Persist Component</p>
      <button onClick={handleLogService}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default ReduxPersistComponent;
