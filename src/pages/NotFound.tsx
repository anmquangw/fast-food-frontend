import React from "react";
import IPage from "../interfaces/page";
import { RouteComponentProps, withRouter } from "react-router-dom";

const NotFound: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  return (
    <>
      <h1>
        <div style={{ textAlign: "center" }}>404</div>
      </h1>
    </>
  );
};

export default withRouter(NotFound);
