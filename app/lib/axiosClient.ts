import axios from "axios";

const baseUrl = import.meta.env.DEV
  ? "http://localhost:5217/v1/"
  : "https://api.barkeepershandbook.com/v1/";

const axiosClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default axiosClient;
