// set action
export const SETLOGIN = "SETLOGIN";
export const SETLOGOUT = "SETLOGOUT";
export const SETUSER = "SETUSER";
export function setLoginAction() {
  return { type: SETLOGIN };
}
export function setLogoutAction() {
  return { type: SETLOGOUT };
}
export function setUserDispatch() {
  return { type: SETUSER };
}

// set init state
const initState = { isLoggedIn: false };

// set reducer and export
const authReducer = (state = initState, action) => {
  if (action.type == "SETLOGIN") {
    return { ...state, isLoggedIn: true };
  } else if (action.type == "SETLOGOUT") {
    return { ...state, isLoggedIn: false };
  }
  return state;
};

export default authReducer;
