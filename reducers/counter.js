// set action
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export function increaseAction() {
  return { type: INCREASE };
}
export function decreaseAction() {
  return { type: DECREASE };
}

// set init state
const initState = { value: 0 };

// set reducer and export
const counterReducer = (state = initState, action) => {
  if (action.type == "INCREASE") {
    return { ...state, value: state.value + 1 };
  } else if (action.type == "DECREASE") {
    return { ...state, value: state.value - 1 };
  }
  return state;
};

export default counterReducer;
