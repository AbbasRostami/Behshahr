import http from "../interceptor";

export const getLandingStatistics = async () => {
    try {
        const response = await http.get(`/Home/LandingReport` );

        return response.data;
        
    } catch (error) {
        return false;
    }

    
} 