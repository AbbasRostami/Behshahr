import http from "../interceptor";

export const getApi = async ({ path }, userParamas = {}) => {
  try {
    const response = await http.get(`${path}`, { params: userParamas });

    return response;
  } catch (error) {
    return false;
  }
};
