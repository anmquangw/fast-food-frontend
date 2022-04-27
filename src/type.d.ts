interface IInitReducer {
  // (state: any, action: IAction): any;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  message: string;
}

interface IBaseBanner {
  name: string;
  image?: string;
}
interface IBaseUser {
  phone?: string;
  password?: string;
  role?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  avatar?: string;
  birthOfDate?: Date;
  sex?: boolean;
}
interface IBaseFoodType {
  name: string;
  img?: string;
}
interface IBaseFood {
  name: string;
  idFoodType: Types.ObjectId;
  price: number;
  quantity: number;
  description?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
}
interface IBaseSale {
  code: string;
  quantity: number;
  description?: string;
  img?: string;
}
interface IBaseOrder {
  idUser?: Types.ObjectId;
  sum?: number;
  address: string;
  name: string;
  status?: string;
  statusShip?: string;
  idPayment?: Types.ObjectId;
  note?: string;
  createdAt: Date;
}
interface IBaseOrderDetail {
  idOrder?: Types.ObjectId;
  idFood?: Types.ObjectId;
  foodName?: string;
  price?: number;
  quantity?: number;
  sum?: number;
}

interface IUsers extends IInitReducer {
  datas: [
    {
      phone: string;
      password: string;
      role: string;
      email: string;
      first_name?: string;
      last_name?: string;
      address?: string;
      avatar?: string;
      birthOfDate?: Date;
      sex?: boolean;
    }
  ];
}
interface IFoodTypes extends IInitReducer {
  datas: [
    {
      _id: string;
      name: string;
      img?: string;
    }
  ];
}
interface IFoods extends IInitReducer {
  datas: [
    {
      name: string;
      idFoodType: Types.ObjectId;
      price: number;
      quantity: number;
      description?: string;
      img1?: string;
      img2?: string;
      img3?: string;
      img4?: string;
      img5?: string;
    }
  ];
  data: {
    // ...IBaseFood
  };
}
interface IBanners extends IInitReducer {
  datas: [
    {
      _id: string;
      name: string;
      image?: string;
    }
  ];
}
interface ISales extends IInitReducer {
  datas: [
    {
      code: string;
      quantity: number;
      description?: string;
      img?: string;
    }
  ];
}
interface IOrders extends IInitReducer {
  datas: [
    {
      idUser: Types.ObjectId;
      sum?: number;
      address: string;
      name: string;
      status?: string;
      idPayment?: Types.ObjectId;
      note?: string;
      createdAt: Date;
      orderDetail: Array<any>;
    }
  ];
}
interface IOrderDetails extends IInitReducer {
  datas: [
    {
      idOrder?: Types.ObjectId;
      idFood?: Types.ObjectId;
      foodName?: string;
      price?: number;
      quantity?: number;
      sum?: number;
    }
  ];
}

//
type ArticleState = {
  articles: IBanners[];
};

type ArticleAction = {
  type: string;
  article: IBanners;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
