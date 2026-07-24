// types/coursesList.ts
export interface CourseItem {
  courseId: string;
  title: string;
  describe: string;
  miniDescribe?: string;
  teacherName: string;
  levelName: string;
  statusName: string;
  cost: number;
  likeCount: number;
  dissLikeCount: number;
  currentRegistrants: number;
  capacity?: number;
  userIsLiked: boolean;
  currentUserDissLike: boolean;
  userFavorite?: boolean;
  courseRate?: { avg: number; count: number };
  tumbImageAddress?: string;
  imageAddress?: string;
  active?: boolean;
  isDelete?: boolean;
}

export interface CoursesApiResponse {
  data: {
    courseFilterDtos: CourseItem[];
    totalCount: number;
    success?: boolean;
  };
}

export interface ActionResponse {
  data: { success: boolean; message?: string };
  status: number;
}

export interface CourseFilterState {
  PageNumber: number;
  RowsOfPage: number;
  SortingCol?: string;
  SortType?: string;
  Query?: string;
  CostDown?: number;
  CostUp?: number;
  CourseTypeId?: string;
  courseLevelId?: string;
  ListTech?: string;
}