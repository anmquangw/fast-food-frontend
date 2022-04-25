import jsCookies from "js-cookie";

class Cookie {
  public readonly cookie: any = jsCookies;

  public key: string = "";
  public value: string = "";

  constructor(data: any = null, options: any = {}) {
    if (data) {
      this.key = Object.keys(data)[0];
      this.value = data[this.key];
    }
    //   if (options.expires) {
    //     jsCookies.set(this.key, this.value, { expires: options.expires });
    //   } else {
    //     jsCookies.set(this.key, this.value);
    //   }
  }

  public set = (value: string = ""): any => {
    if (value) {
      this.value = value;
      this.cookie.set(this.key, this.value);
    }
    return this.value;
  };

  public get = (): any => this.cookie.get(this.key) || this.value;

  public remove = () => {
    if (!this.cookie.get(this.key)) return false;
    this.cookie.remove(this.key);
    return true;
  };
}

class Token extends Cookie {
  constructor() {
    super();
    this.key = "token";
  }
}

const token = new Token();

export { Cookie, Token };
export { token };
