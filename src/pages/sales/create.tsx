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
import { SaleActions } from "../../actions";

const BannerPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const { id }: IPage = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IBaseSale>({
    code: "",
    quantity: 0,
    description: "",
    img: "",
  });
  const banners: ISales = useSelector(
    (state: any) => state.saleReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (id) dispatch(SaleActions.default.getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(banners.isLoading);
  }, [banners.isLoading]);

  useEffect(() => {
    if (id && !banners.isLoading) setForm(banners.data[0]);
  }, [banners.data, id, banners.isLoading]);

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

  async function handleClick() {
    const render = Promise.all([
      dispatch(
        id
          ? SaleActions.default.putUpdate(id, form)
          : SaleActions.default.postCreate(form)
      ),
    ]);

    render.then(() => {
      setTimeout(() => {
        history.push(`${path.sales.path}`);
      }, 2500);
    });
  }

  return (
    <>
      <Breakcrumb
        title={path.saleCreate.name}
        paths={[
          { ...path.dashBoard },
          { ...path.sales },
          { ...(id ? path.saleEdit : path.saleCreate) },
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
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="has-success form-group">
                        <label htmlFor="code" className="form-control-label">
                          Mã
                        </label>
                        <input
                          name="code"
                          type="text"
                          id="code"
                          className="form-control"
                          value={form?.code}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="has-success form-group">
                        <label
                          htmlFor="quantity"
                          className="form-control-label"
                        >
                          Số lượng
                        </label>
                        <input
                          name="quantity"
                          type="number"
                          id="quantity"
                          className="form-control"
                          value={form?.quantity}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
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
                      value={form?.description}
                      onChange={handleChange}
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

export default withRouter(BannerPage);
