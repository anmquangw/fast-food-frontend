import jsCookies, { CookiesStatic } from "js-cookie";

class Cookie {
  public readonly cookie: CookiesStatic<string> = jsCookies;

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

  public set = (value: string = ""): string => {
    if (value) {
      this.value = value;
      this.cookie.set(this.key, this.value);
    }
    return this.value;
  };

  public get = (): string => this.cookie.get(this.key) || this.value;

  public remove = (): boolean => {
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

  public isToken(): boolean {
    return this.get() ? true : false;
  }
}

const token = new Token();

export { Cookie, Token };
export { token };
