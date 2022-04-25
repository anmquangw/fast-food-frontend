import IRoute from "../interfaces/route";
import path from "./base.path";
// HomePage
import HomePage from "../pages/home";
// OrderPage
import OrderPage from "../pages/order";
import OrderDetailPage from "../pages/order/detail";
// SalesPage
import SalesPage from "../pages/sales";
import SaleCreatePage from "../pages/sales/create";
// StatisticsPage
import StatisticsPage from "../pages/statistics";
// FoodPage
import FoodPage from "../pages/food";
import FoodCreatePage from "../pages/food/create";
// FoodTypePage
import FoodTypePage from "../pages/foodType";
import FoodTypeCreatePage from "../pages/foodType/create";
// CustomerPage
import CustomerPage from "../pages/customer";
import CustomerSettingPage from "../pages/customer/create";
// AdminPage
import AdminPage from "../pages/admin";
// LockAccountPage
import LockAccountPage from "../pages/lockAccount";
// BannerPage
import BannerPage from "../pages/banner";
import BannerCreatePage from "../pages/banner/create";
// Auth
import SigninPage from "../pages/signin";
import SignupPage from "../pages/signup";
// Any
import NotFound from "../pages/NotFound";

// Auth
const authRoutes: IRoute[] = [
  // HomePage
  {
    ...path.dashBoard,
    component: HomePage,
    exact: true,
  },
  // OrderPage
  {
    ...path.order,
    component: OrderPage,
    exact: true,
  },
  {
    ...path.orderDetail,
    component: OrderDetailPage,
    exact: true,
  },
  // SalesPage
  {
    ...path.sales,
    component: SalesPage,
    exact: true,
  },
  {
    ...path.saleCreate,
    component: SaleCreatePage,
    exact: true,
  },
  {
    ...path.saleEdit,
    component: SaleCreatePage,
    exact: true,
  },
  // StatisticsPage
  {
    ...path.statistics,
    component: StatisticsPage,
    exact: true,
  },
  // FoodPage
  {
    ...path.food,
    component: FoodPage,
    exact: true,
  },
  {
    ...path.foodCreate,
    component: FoodCreatePage,
    exact: true,
  },
  {
    ...path.foodEdit,
    component: FoodCreatePage,
    exact: true,
  },
  // FoodTypePage
  {
    ...path.foodType,
    component: FoodTypePage,
    exact: true,
  },
  {
    ...path.foodTypeCreate,
    component: FoodTypeCreatePage,
    exact: true,
  },
  {
    ...path.foodTypeEdit,
    component: FoodTypeCreatePage,
    exact: true,
  },
  // CustomerPage
  {
    ...path.customer,
    component: CustomerPage,
    exact: true,
  },
  {
    ...path.customerSetting,
    component: CustomerSettingPage,
    exact: true,
  },
  // AdminPage
  {
    ...path.admin,
    component: AdminPage,
    exact: true,
  },
  // LockAccountPage
  {
    ...path.lockAccount,
    component: LockAccountPage,
    exact: true,
  },
  // BannerPage
  {
    ...path.banner,
    component: BannerPage,
    exact: true,
  },
  {
    ...path.bannerCreate,
    component: BannerCreatePage,
    exact: true,
  },
  {
    ...path.bannerEdit,
    component: BannerCreatePage,
    exact: true,
  },
];

// noAuth
const noAuthRoutes: IRoute[] = [
  // Auth
  {
    ...path.signin,
    component: SigninPage,
    exact: true,
  },
  {
    ...path.signup,
    component: SignupPage,
    exact: true,
  },
];

// Any path
const anyRoutes: IRoute[] = [
  {
    ...path.anyPath,
    component: NotFound,
  },
];

export { authRoutes, noAuthRoutes, anyRoutes };
