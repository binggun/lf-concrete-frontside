import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useStore } from "@/store/auth";

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 30000,
  headers: {
    "Content-type": "application/json",
  },
};

const apiClient: AxiosInstance = axios.create(apiConfig);

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const store = useStore();
    if (store.isLogin) {
      config.headers["X-JWT-TOKEN"] = store.auth.token;
    }
    return Promise.resolve(config);
  },

  (error: any) => Promise.reject(error)
);

export default apiClient;
