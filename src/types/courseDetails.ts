// types/courseDetails.ts
export interface CourseDetailsType {
  courseId: string;
  title: string;
  describe: string;
  miniDescribe: string;
  googleTitle?: string;
  teacherName: string;
  teacherId: number;
  cost: number;
  capacity: number;
  courseLevelName: string;
  courseStatusName: string;
  statusName?: string;
  startTime: string;
  endTime: string;
  insertDate?: string;
  imageAddress: string;
  tumbImageAddress?: string;
  likeCount: number;
  dissLikeCount: number;
  currentRate: number;
  courseRate: number;
  studentCount: number;
  userIsLiked: boolean;
  userIsDissLike?: boolean;
  currentUserDissLike: boolean;
  currentUserSetRate: boolean;
  isExpire?: boolean;
  isCourseReseve?: boolean;
  courseTech?: string[];
  active?: boolean;
}

export interface CourseCommentType {
  id: string;
  courseId: string;
  parentId: string;
  title: string;
  describe: string;
  author: string;
  userId: number;
  insertDate: string;
  accept: boolean;
  pictureAddress: string;
  currentUserIsLike: boolean;
  currentUserIsDissLike: boolean;
  likeCount: number;
  disslikeCount: number;
  acceptReplysCount?: number;
}

export interface DetailsApiResponse {
  data: CourseDetailsType & { success?: boolean; message?: string };
}

export interface CommentsApiResponse {
  data: CourseCommentType[];
}

export interface ActionResponse {
  data: { success: boolean; message?: string };
  status: number;
}
