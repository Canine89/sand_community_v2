// with redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper, withRedux } from "next-redux-wrapper";

// with redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

// reducer
import counterReducer from "../reducers/counter";
import authReducer from "../reducers/auth";

const rootReducer = combineReducers({
  counterReducer,
  authReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
