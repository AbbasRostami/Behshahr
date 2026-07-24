import axios from "axios";

const baseURL = import.meta.env.PROD
  ? "/api"
  : import.meta.env.VITE_BASE_URL || "http://162.19.253.202:3001";

const instance = axios.create({
  baseURL,
});

const logout = () => {
  localStorage.removeItem("token");
  window.location.replace("/login");
};

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      logout();
    }

    return Promise.reject(error.response || error);
  },
);

export default instance;
