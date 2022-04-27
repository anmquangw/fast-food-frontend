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
import { BannerActions } from "../../actions";

const BannerPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const { id }: IPage = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IBaseBanner>({
    name: "",
    image: "",
  });
  const banners: any = useSelector(
    (state: any) => state.bannerReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (id) dispatch(BannerActions.default.getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(banners.isLoading);
  }, [banners.isLoading]);

  useEffect(() => {
    if (id && !banners.isLoading) setForm(banners.data);
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
          ? BannerActions.default.putUpdate(id, form)
          : BannerActions.default.postCreate(form)
      ),
    ]);

    render.then(() => {
      setTimeout(() => {
        history.push(`${path.banner.path}`);
      }, 2500);
    });
  }

  return (
    <>
      <Breakcrumb
        title={"Banner"}
        paths={[
          { ...path.dashBoard },
          { ...path.banner },
          { ...(id ? path.bannerEdit : path.bannerCreate) },
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
                      Tên banner
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
                    <label htmlFor="image" className="form-control-label">
                      Ảnh
                    </label>
                    <input
                      name="image"
                      type="file"
                      id="image"
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

export default withRouter(BannerPage);
