import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import { token } from "../helpers/cookies";

const initialState = {
  authReducer: {
    isAuthenticated: token.isToken(),
  },
};

const store: Store<any> & {
  dispatch: any;
} = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
