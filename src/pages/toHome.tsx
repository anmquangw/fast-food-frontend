import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import IPage from "../interfaces/page";
import path from "../config/base.path";

const SigninPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  return <Redirect to={path.dashBoard.path} />;
};

export default withRouter(SigninPage);
