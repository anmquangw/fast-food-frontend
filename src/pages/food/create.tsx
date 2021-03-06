import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  RouteComponentProps,
  withRouter,
  useParams,
  useHistory,
} from "react-router-dom";
import IPage from "../../interfaces/page";
import Breakcrumb from "../../components/Breakcrumb";
import { saveImage } from "../../helpers/image";
import path from "../../config/base.path";
import { FoodActions, FoodTypeActions } from "../../actions";

const FoodTypePage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const { id }: IPage = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IBaseFood>({
    name: "",
    idFoodType: "",
    price: 0,
    quantity: 0,
    description: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  });
  const foods: any = useSelector(
    (state: any) => state.foodReducer,
    shallowEqual
  );
  const foodTypes: IFoodTypes = useSelector(
    (state: any) => state.foodTypeReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(FoodTypeActions.default.getList());
    if (id) dispatch(FoodActions.default.getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(foods.isLoading);
  }, [foods.isLoading]);

  useEffect(() => {
    if (id && !foods.isLoading) setForm(foods.data);
  }, [foods.data, id, foods.isLoading]);

  function handleChange(e: any) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleUpload(e: any) {
    const { name, files }: any = e.target;
    setIsLoading(true);
    saveImage(files).then((res) => {
      setForm({ ...form, [name]: res });
      setIsLoading(false);
    });
  }

  function handleClick() {
    const render = Promise.all([
      dispatch(
        id
          ? FoodActions.default.putUpdate(id, form)
          : FoodActions.default.postCreate(form)
      ),
    ]);

    render.then(() => {
      setTimeout(() => {
        history.push(`${path.food.path}`);
      }, 2500);
    });
  }

  return (
    <>
      <Breakcrumb
        title={"Lo???i m??n ??n"}
        paths={[
          { ...path.dashBoard },
          { ...path.food },
          { ...(id ? path.foodEdit : path.foodCreate) },
        ]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong>{!id ? "Th??m" : "S???a"}</strong>
                </div>
                <div className="card-body card-block">
                  <div className="has-success form-group">
                    <label htmlFor="name" className="form-control-label">
                      T??n m??n
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

                  <div className="form-group">
                    <label htmlFor="idFoodType" className="form-control-label">
                      Danh m???c
                    </label>
                    <select
                      name="idFoodType"
                      id="idFoodType"
                      disabled={foodTypes.isLoading || isLoading}
                      className="form-control"
                      value={form?.idFoodType || ""}
                      onChange={handleChange}
                    >
                      <option value={""}>L???a ch???n danh m???c</option>
                      {foodTypes.datas.map((item: any, index: number) => (
                        <option key={index} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="has-success form-group">
                        <label htmlFor="price" className="form-control-label">
                          Gi??
                        </label>
                        <input
                          name="price"
                          type="number"
                          id="price"
                          className="form-control"
                          value={form?.price || 0}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="has-success form-group">
                        <label
                          htmlFor="quantity"
                          className="form-control-label"
                        >
                          S??? l?????ng
                        </label>
                        <input
                          name="quantity"
                          type="number"
                          id="quantity"
                          className="form-control"
                          value={form?.quantity || 0}
                          onChange={handleChange}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img1" className="form-control-label">
                          ???nh 1
                        </label>
                        <input
                          name="img1"
                          type="file"
                          id="img1"
                          className="form-control-file"
                          onChange={handleUpload}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img2" className="form-control-label">
                          ???nh 2
                        </label>
                        <input
                          name="img2"
                          type="file"
                          id="img2"
                          className="form-control-file"
                          onChange={handleUpload}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img3" className="form-control-label">
                          ???nh 3
                        </label>
                        <input
                          name="img3"
                          type="file"
                          id="img3"
                          className="form-control-file"
                          onChange={handleUpload}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img4" className="form-control-label">
                          ???nh 4
                        </label>
                        <input
                          name="img4"
                          type="file"
                          id="img4"
                          className="form-control-file"
                          onChange={handleUpload}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="has-warning form-group">
                    <label htmlFor="img5" className="form-control-label">
                      ???nh 5
                    </label>
                    <input
                      name="img5"
                      type="file"
                      id="img5"
                      className="form-control-file"
                      onChange={handleUpload}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="has-success form-group">
                    <label htmlFor="description" className="form-control-label">
                      M?? t???
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className="form-control"
                      onChange={handleChange}
                      value={form?.description || ""}
                      rows={5}
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
                      {!id ? "Th??m" : "S???a"}
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
