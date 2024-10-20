import http from "../interceptor";

export const RegisterApi = async (body) => {
    try {
        const response = await http.post("/Sign/SendVerifyMessage", body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 