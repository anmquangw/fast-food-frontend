import { Auth as AuthConstants } from "../constants";
import { authState, initialState } from "./initState.reducers";

export default function AuthReducer(state = authState, action: any) {
  switch (action.type) {
    case AuthConstants.default.AUTH_REQUEST:
      return {
        ...authState,
        isLoading: true,
      };
    case AuthConstants.default.AUTH_FAILURE:
      console.log(action.payload);
      return {
        ...authState,
        isError: true,
        errorMessage: action?.payload?.data?.error,
      };

    case AuthConstants.default.SIGNIN_SUCCESS:
      initialState._token = action.payload.token;
      return {
        ...authState,
        isAuthenticated: initialState.token.isToken,
        data: action.payload.data,
      };

    case AuthConstants.default.SIGNOUT_SUCCESS:
      initialState.token.remove();
      return {
        ...authState,
        isAuthenticated: initialState.token.isToken,
      };

    default:
      return state;
  }
}
