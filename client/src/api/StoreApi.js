import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  timeout: 5000,
  headers: { Accept: "*/*", "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default {
  getStoreList() {
    return instance({
      url: "/stores",
      method: "get",
    });
  },
  getStoreListDetail(storeId) {
    return instance({
      url: `/stores/${storeId}`,
      method: "get",
    });
  },
};
