import { token } from "../helpers/cookies";

export class initialState {
  public isLoading: boolean = false;
  public isError: boolean = false;
  public errorMessage: string = "";
  public message: string = "";
  public datas: Array<any>;
  public data: Object;
  public static token: any = token;
  
  constructor() {
    this.isLoading = false;
    this.isError = false;
    this.errorMessage = "";
    this.message = "";
    this.datas = [];
    this.data = {};
  }

  public static get _token() {
    return token.get();
  }

  public static set _token(value: any) {
    token.set(value);
  }
}

export const initState = new initialState();

export const authState = {
  isAuthenticated: false,
  ...initialState,
};
