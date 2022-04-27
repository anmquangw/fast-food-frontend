import { combineReducers } from "redux";
import {
  AuthReducer as authReducer,
  UserReducer as userReducer,
  BannerReducer as bannerReducer,
  FoodReducer as foodReducer,
  FoodTypeReducer as foodTypeReducer,
  SaleReducer as saleReducer,
  OrderReducer as orderReducer,
  StatisticsReducer as statisticsReducer,
} from "../reducers";

export const rootReducer: any = combineReducers({
  authReducer: authReducer.default,
  userReducer: userReducer.default,
  bannerReducer: bannerReducer.default,
  foodReducer: foodReducer.default,
  foodTypeReducer: foodTypeReducer.default,
  saleReducer: saleReducer.default,
  orderReducer: orderReducer.default,
  statisticsReducer: statisticsReducer.default,
});
