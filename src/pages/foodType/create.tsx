import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  RouteComponentProps,
  withRouter,
  useParams,
  useHistory,
} from "react-router-dom";
import { saveImage } from "../../helpers/image";
import IPage from "../../interfaces/page";
import Breakcrumb from "../../components/Breakcrumb";
import path from "../../config/base.path";
import { FoodTypeActions } from "../../actions";

const FoodTypePage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const { id }: IPage = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IBaseFoodType>({
    name: "",
    img: "",
  });
  const foodTypes: any = useSelector(
    (state: any) => state.foodTypeReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (id) dispatch(FoodTypeActions.default.getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(foodTypes.isLoading);
  }, [foodTypes.isLoading]);

  useEffect(() => {
    if (id && !foodTypes.isLoading) setForm(foodTypes.data);
  }, [foodTypes.data, id, foodTypes.isLoading]);

  function handleChange(e: any) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleUpload(e: any) {
    const { name, files }: any = e.target;
    setIsLoading(true);
    saveImage(files).then((res) => {
      setForm({ ...form, [name]: res.data.url });
      setIsLoading(false);
    });
  }

  function handleClick() {
    const render = Promise.all([
      dispatch(
        id
          ? FoodTypeActions.default.putUpdate(id, form)
          : FoodTypeActions.default.postCreate(form)
      ),
    ]);

    render.then(() => {
      setTimeout(() => {
        history.push(`${path.foodType.path}`);
      }, 2500);
    });
  }

  return (
    <>
      <Breakcrumb
        title={"Loại món ăn"}
        paths={[
          { ...path.dashBoard },
          { ...path.foodType },
          { ...(id ? path.foodTypeEdit : path.foodTypeCreate) },
        ]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong>{!id ? "Thêm" : "Sửa"}</strong>
                </div>
                <div className="card-body card-block">
                  <div className="has-success form-group">
                    <label htmlFor="name" className="form-control-label">
                      Tên loại
                    </label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      className="form-control"
                      value={form?.name || ""}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="has-warning form-group">
                    <label htmlFor="img" className="form-control-label">
                      Ảnh
                    </label>
                    <input
                      name="img"
                      type="file"
                      id="img"
                      className="form-control-file"
                      onChange={handleUpload}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-actions form-group">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm"
                      disabled={isLoading}
                      onClick={handleClick}
                    >
                      {!id ? "Thêm" : "Sửa"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- .animated --> */}
      </div>
      {/* <!-- .content --> */}
    </>
  );
};

export default withRouter(FoodTypePage);
