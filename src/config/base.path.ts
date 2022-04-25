const path = {
  // HomePage
  dashBoard: {
    path: "/",
    name: "Trang chủ",
  },
  // OrderPage
  order: {
    path: "/order",
    name: "Đơn đặt hàng",
  },
  orderDetail: {
    path: "/order/:id",
    name: "Chi tiết đơn đặt hàng",
  },
  // SalesPage
  sales: {
    path: "/sales",
    name: "Mã giảm giá",
  },
  saleCreate: {
    path: "/sales/create",
    name: "Thêm mã giảm giá",
  },
  saleEdit: {
    path: "/sales/create/:id",
    name: "Sửa mã giảm giá",
  },
  // StatisticsPage
  statistics: {
    path: "/statistics",
    name: "Thống kê",
  },
  // FoodPage
  food: {
    path: "/food",
    name: "Thực đơn",
  },
  foodCreate: {
    path: "/food/create",
    name: "Thêm thực đơn",
  },
  foodEdit: {
    path: "/food/create/:id",
    name: "Sửa thực đơn",
  },
  // FoodTypePage
  foodType: {
    path: "/foodType",
    name: "Danh mục",
  },
  foodTypeCreate: {
    path: "/foodType/create",
    name: "Thêm danh mục",
  },
  foodTypeEdit: {
    path: "/foodType/create/:id",
    name: "Sửa danh mục",
  },
  // CustomerPage
  customer: {
    path: "/customer",
    name: "Khách hàng",
  },
  customerSet: {
    path: "/customer/setting",
    name: "Cài đặt khách hàng",
  },
  customerSetting: {
    path: "/customer/setting/:id",
    name: "Cài đặt khách hàng",
  },
  // AdminPage
  admin: {
    path: "/admin",
    name: "Quản trị viên",
  },
  // LockAccountPage
  lockAccount: {
    path: "/lockAccount",
    name: "Tài khoản bị khóa",
  },
  // BannerPage
  banner: {
    path: "/banner",
    name: "Quảng cáo",
  },
  bannerCreate: {
    path: "/banner/create",
    name: "Banner Create",
  },
  bannerEdit: {
    path: "/banner/create/:id",
    name: "Banner Edit",
  },
  // AuthPage
  signup: {
    path: "/signup",
    name: "Signup",
  },
  signin: {
    path: "/signin",
    name: "Signin",
  },
  // AnyPage
  anyPath: {
    path: "*",
    name: "Any Path",
  },
};

export default path;
