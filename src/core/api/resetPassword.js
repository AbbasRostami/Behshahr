import http from "../interceptor";



export const ForgetPasswordApi = async (body) => {
    try {
        const response = await http.post(`/Sign/ForgetPassword`, body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 



export const getResetPass = async () => {
    try {
        const response = await http.get(`/Sign/Reset/:ConfigValue `);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 

export const postResetPassword = async (body) => {
    try {
        const response = await http.post("/Sign/Reset" , body);

        return response;
        
    } catch (error) {
        return false;
    }
    
} 