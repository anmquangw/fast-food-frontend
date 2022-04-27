import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RouteComponentProps, withRouter, useParams } from "react-router-dom";

import IPage from "../../interfaces/page";
import Breakcrumb from "../../components/Breakcrumb";
import ListDetails from "./components/ListDetails";
import path from "../../config/base.path";
import { OrderActions } from "../../actions";

const BannerPage: React.FunctionComponent<
  IPage & RouteComponentProps<any>
> = () => {
  const { id }: IPage = useParams();
  const [form, setForm] = useState<any>({
    status: "",
    statusShip: "",
  });

  const status = [
    {
      id: "0",
      name: "Thanh toán khi nhận",
    },
    {
      id: "1",
      name: "Thanh toán qua momo",
    },
  ];

  const statusShip = [
    {
      id: "0",
      name: "Đang xác nhận",
    },
    {
      id: "1",
      name: "Đang chuẩn bị đồ ăn",
    },
    {
      id: "2",
      name: "Đang giao hàng",
    },
    {
      id: "3",
      name: "Đã hoàn thành",
    },
    {
      id: "4",
      name: "Đã hủy",
    },
  ];

  const orders: any = useSelector(
    (state: any) => state.orderReducer,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (id) dispatch(OrderActions.default.getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (id && !orders.isLoading) setForm(orders.data);
  }, [orders.data, id, orders.isLoading]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    dispatch(OrderActions.default.putUpdate(id, { ...form, [name]: value }));
  }

  return (
    <>
      <Breakcrumb
        title={path.orderDetail.name}
        paths={[
          { ...path.dashBoard },
          { ...path.order },
          { ...path.orderDetail },
        ]}
      />

      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body card-block">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="idFoodType"
                          className="form-control-label"
                        >
                          Trạng thái đơn
                        </label>
                        <select
                          name="status"
                          id="status"
                          disabled={true}
                          className="form-control"
                          value={form?.status}
                          onChange={handleChange}
                        >
                          {status.map((item: any, index: number) => (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="idFoodType"
                          className="form-control-label"
                        >
                          Trang thái giao hàng
                        </label>
                        <select
                          name="statusShip"
                          id="statusShip"
                          disabled={orders.isLoading}
                          className="form-control"
                          value={form?.statusShip}
                          onChange={handleChange}
                        >
                          {statusShip.map((item: any, index: number) => (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-stats order-table ov-h">
                  <ListDetails datas={orders.data?.orderDetail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(BannerPage);
