import http from "../interceptor";

export const getArticlesList = async ( 
 
  ) => {
    try {
        const response = await http.get(`/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC` );

        return response.data;
        
    } catch (error) {
        return false;
    }

    
} 
export const getArticlesListTop = async()=>{
    try {
        const response2 =await http.get(`/News/GetListNewsCategory`)
        return response2.data
    } catch (error) {
        return false;
    }
}

export const getArticlesListSort = async()=>{
    try {
        const response3 =await http.get(`/CourseLevel/GetAllCourseLevel`)
        return response3.data
    } catch (error) {
        return false;
    }
}

export const getArticlesListSort2 = async()=>{
    try {
        const response4 =await http.get(`/CourseType/GetCourseTypes`)
        return response4.data
    } catch (error) {
        return false;
    }
}