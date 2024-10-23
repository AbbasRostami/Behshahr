import http from "../interceptor";

export const getApi = async ( {path}
 
  ) => {
    try {
        const response = await http.get(`${path}` );

        return response;
        
    } catch (error) {
        return false;
    }

    
} 