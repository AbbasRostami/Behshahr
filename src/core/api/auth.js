import http from "../interceptor";

export const loginAPI = async (body) => {
    try {
        const response = await http.post("/Sign/Login", body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 