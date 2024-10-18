import http from "../interceptor";

export const ForgetPasswordApi = async (user2) => {
    try {
        const response2 = await http.post("/Sign/ForgetPassword", user2);

        return response2;
        
    } catch (error) {
        return false;
    }
    console.log(user2);
    
} 