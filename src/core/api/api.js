import http from "../interceptor";

/**
 * GET request
 */
export const getApi = async ({ path, params = {} }) => {
  try {
    const response = await http.get(path, { params });
    return response;
  } catch (error) {
    console.error("GET API Error:", error);
    return error;
  }
};

/**
 * POST request
 */
export const postApi = async ({ path, body = {} }) => {
  try {
    const response = await http.post(path, body);
    return response;
  } catch (error) {
    console.error("POST API Error:", error);
    return error;
  }
};

/**
 * PUT request
 */
export const editApi = async ({ path, body = {} }) => {
  try {
    const response = await http.put(path, body);
    return response;
  } catch (error) {
    console.error("PUT API Error:", error);
    return error;
  }
};

/**
 * DELETE request
 */
export const deleteApi = async ({ path, body = {} }) => {
  try {
    const response = await http.delete(path, { data: body });
    return response;
  } catch (error) {
    console.error("DELETE API Error:", error);
    return error;
  }
};
