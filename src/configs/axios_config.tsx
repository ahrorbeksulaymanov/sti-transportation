import axios from "axios";
import { PATH_API } from "../constants";

const instance = axios.create();

instance.defaults.baseURL = PATH_API;

const onFulfilledReq = (config:any) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("access_token");
  return config;
};

const onRejectedReq = (config:any) => {
  return config;
};

instance.interceptors.request.use(onFulfilledReq, onRejectedReq);

const onFulfilledRes = (config:any) => {
  return config;
};

const onRejectedRes = (config:any) => {
  console.log(config);
//   alert(config?.response?.data?.message);
  return config;
};

instance.interceptors.response.use(onFulfilledRes, onRejectedRes);

export default instance;