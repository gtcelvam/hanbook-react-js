import { LOGIN, LOGOUT } from "../../Constants";

const initialState = false;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = true);
    case LOGOUT:
      return (state = false);
    default:
      return state;
  }
};

export default loginReducer;
