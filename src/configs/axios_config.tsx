import { message } from "antd";
import axios from "axios";
import { Navigate } from "react-router-dom";
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

  message.error(config?.response?.data?.detail?.message)
  console.log("eee",config?.response?.data?.detail?.message, config?.response?.status == 403);
  
  if(config?.response?.status == 403){
    <Navigate to="/login" replace />    
  }

  return config;
};

instance.interceptors.response.use(onFulfilledRes, onRejectedRes);

export default instance;