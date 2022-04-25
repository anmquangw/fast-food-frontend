import { Link } from "react-router-dom";
import IPath from "../interfaces/path";

function Breakcrumb(props: any) {
  function renderPath(datas: any): any {
    const dataLength = datas?.length;

    return datas?.map((data: IPath, index: number) => {
      return dataLength - 1 === index ? (
        <li key={index} className="active">
          {data.name}
        </li>
      ) : (
        <li key={index}>
          <Link to={data.path}>{data.name}</Link>
        </li>
      );
    });
  }

  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs-inner">
          <div className="row m-0">
            <div className="col-sm-4">
              <div className="page-header float-left">
                <div className="page-title">
                  <h1>{props.title}</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="page-header float-right">
                <div className="page-title">
                  <ol className="breadcrumb text-right">
                    {renderPath(props.paths)}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breakcrumb;
