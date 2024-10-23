import http from "../interceptor";

export const getApi = async ({ path }) => {
  try {
    const response = await http.get(`${path}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const postApi = async ({ path, body }) => {
  try {
    const response = await http.post(`${path}`, body);
    return response;
  } catch (error) {
    return error;
  }
};
