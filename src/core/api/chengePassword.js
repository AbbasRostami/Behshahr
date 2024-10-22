import http from "../interceptor"
 export const postChengePassword =async (body) =>{

    try {
      const response =  await http.post(`/SharePanel/ChangePassword`, body);

      return response

    } catch (error) {
        return false
    }
 }