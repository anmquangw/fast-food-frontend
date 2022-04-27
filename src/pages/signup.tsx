import React from "react";
import IPage from "../interfaces/page";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { token } from "../helpers/cookies";

const SignupPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  console.log(token.get());
  return (
    <div>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default withRouter(SignupPage);
