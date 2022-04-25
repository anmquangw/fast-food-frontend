import { Auth as AuthConstants } from "../constants";
import { token } from "../helpers/cookies";

export default function AuthReducer(state = token.get(), action: any) {
  switch (action.type) {
    // List
    case AuthConstants.GET_TOKEN:
      return token.get();
    case AuthConstants.SET_TOKEN:
      return token.set(action?.payload?.token);
    case AuthConstants.REMOVE_TOKEN:
      return token.remove();

    default:
      return state;
  }
}
