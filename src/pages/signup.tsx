import React from "react";
import IPage from "../interfaces/page";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

const SignupPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  return (
    <div>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default withRouter(SignupPage);
