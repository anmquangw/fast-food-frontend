import axios from "axios";
import { token } from "./cookies";

export { axios };

export default axios.create({
  // baseURL: "https://api.github.com",
  baseURL: "https://fast-food-dev.herokuapp.com",
  // baseURL: "http://localhost:5000",
  timeout: 1000 * 10,
  headers: {
    Authorization: `Bearer ${token.get()}`,
    accept: "application/json",
  },
});
