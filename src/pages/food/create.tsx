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
  const foods: IFoods = useSelector(
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
    if (id && !foods.isLoading) setForm(foods.data[0]);
  }, [foods.data, id, foods.isLoading]);

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
        title={"Loại món ăn"}
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
                  <strong>{!id ? "Thêm" : "Sửa"}</strong>
                </div>
                <div className="card-body card-block">
                  <div className="has-success form-group">
                    <label htmlFor="name" className="form-control-label">
                      Tên món
                    </label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      className="form-control"
                      value={form?.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="idFoodType" className="form-control-label">
                      Danh mục
                    </label>
                    <select
                      name="idFoodType"
                      id="idFoodType"
                      disabled={foodTypes.isLoading}
                      className="form-control"
                      value={form?.idFoodType}
                      onChange={handleChange}
                    >
                      <option value={""}>Lựa chọn danh mục</option>
                      {foodTypes.data.map((item: any, index: number) => (
                        <option
                          key={index}
                          value={item._id}
                          selected={item._id === form?.idFoodType}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="has-success form-group">
                        <label htmlFor="price" className="form-control-label">
                          Giá
                        </label>
                        <input
                          name="price"
                          type="text"
                          id="price"
                          className="form-control"
                          value={form?.price}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="has-success form-group">
                        <label
                          htmlFor="quantity"
                          className="form-control-label"
                        >
                          Số lượng
                        </label>
                        <input
                          name="quantity"
                          type="text"
                          id="quantity"
                          className="form-control"
                          value={form?.quantity}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img1" className="form-control-label">
                          Ảnh 1
                        </label>
                        <input
                          name="img1"
                          type="file"
                          id="img1"
                          className="form-control-file"
                          onChange={handleUpload}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img2" className="form-control-label">
                          Ảnh 2
                        </label>
                        <input
                          name="img2"
                          type="file"
                          id="img2"
                          className="form-control-file"
                          onChange={handleUpload}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img3" className="form-control-label">
                          Ảnh 3
                        </label>
                        <input
                          name="img3"
                          type="file"
                          id="img3"
                          className="form-control-file"
                          onChange={handleUpload}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="has-warning form-group">
                        <label htmlFor="img4" className="form-control-label">
                          Ảnh 4
                        </label>
                        <input
                          name="img4"
                          type="file"
                          id="img4"
                          className="form-control-file"
                          onChange={handleUpload}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="has-warning form-group">
                    <label htmlFor="img5" className="form-control-label">
                      Ảnh 5
                    </label>
                    <input
                      name="img5"
                      type="file"
                      id="img5"
                      className="form-control-file"
                      onChange={handleUpload}
                    />
                  </div>
                  <div className="has-success form-group">
                    <label htmlFor="description" className="form-control-label">
                      Mô tả
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className="form-control"
                      onChange={handleChange}
                      value={form?.description}
                      rows={5}
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
