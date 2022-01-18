// set action
export const SETLOGGEDIN = "SETLOGGEDIN";
export function setLoggedInAction() {
  return { type: SETLOGGEDIN };
}

// set init state
const initState = { isLoggedIn: false };

// set reducer and export
const authReducer = (state = initState, action) => {
  if (action.type == "SETLOGGEDIN") {
    return { ...state, isLoggedIn: !state.isLoggedIn };
  }
  return state;
};

export default authReducer;
