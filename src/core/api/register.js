import http from "../interceptor";

export const SendVerifyMessage = async (body) => {
    try {
        const response = await http.post("/Sign/SendVerifyMessage", body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 
export const verifyMessage = async (body) => {
    try {
        const response = await http.post("/Sign/VerifyMessage", body)
        return response
    } catch (error) {
        return false
    }
} 


export const finalregister = async (body) => {
    try {
        const response = await http.post(`/Sign/Register`, body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 