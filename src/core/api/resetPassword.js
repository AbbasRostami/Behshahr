import http from "../interceptor";

export const resetPasswordApi = async (user3) => {
    try {
        const response3 = await http.get("/Sign/Reset/:ConfigValue user3");

        return response3;
        
    } catch (error) {
        return false;
    }
    console.log(user3);
    
} 