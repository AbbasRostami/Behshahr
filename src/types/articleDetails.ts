export interface CommentDto {
  id: string;
  title: string;
  describe: string;
  likeCount: number;
  dissLikeCount: number;
  replyCount: number;
  inserDate: string;
  newsId: string;
  parentId: string;
  userId: number;
}

export interface DetailsNewsDto {
  id: string;
  title: string;
  describe: string;
  miniDescribe: string;
  googleTitle: string;
  googleDescribe: string;
  keyword: string;
  currentLikeCount: number;
  currentDissLikeCount: number;
  currentRate: number;
  currentView: number;
  insertDate: string;
  addUserFullName: string;
  addUserProfileImage: string | null;
  currentImageAddress: string | null;
  currentImageAddressTumb: string | null;
  newsCatregoryName: string;
  commentsCount: number;
  newsRate: { avg: number; count: number };
}

export interface NewsDetailsData {
  detailsNewsDto: DetailsNewsDto;
  commentDtos: CommentDto[];
}

export interface NewsDetailsApiResponse {
  data: NewsDetailsData & { success?: boolean };
}

export interface ActionResponse {
  data: { success: boolean; message?: string };
  status: number;
}
