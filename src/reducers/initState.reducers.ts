export class initialState {
  public isLoading: boolean = false;
  public isError: boolean = false;
  public errorMessage: string = "";
  public message: string = "";
  public data: any;

  constructor() {
    this.isLoading = false;
    this.isError = false;
    this.errorMessage = "";
    this.message = "";
    this.data = [];
  }
}

export const initState = new initialState();

export const authState = {
  isAuthenticated: false,
  ...initialState,
};
