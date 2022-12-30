import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

Axios.defaults.headers["content-type"] = "application/json";
Axios.defaults.headers["accept"] = "application/json";

export default Axios;
