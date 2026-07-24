export interface NewsType {
  id: string;
  title: string;
  miniDescribe: string;
  describe?: string;
  addUserFullName: string;
  addUserProfileImage: string;
  currentImageAddress?: string;
  currentImageAddressTumb?: string;
  currentLikeCount: number;
  currentDissLikeCount: number;
  currentRate: number;
  currentView?: number;
  currentUserIsLike: boolean;
  currentUserIsDissLike: boolean;
  currentUserSetRate: boolean;
  newsCatregoryName: string;
  newsCatregoryId?: string;
  insertDate: string;
  active?: boolean;
  newsRate?: { avg?: number; count?: number };
}

export interface NewsApiResponse {
  data: {
    news: NewsType[];
    totalCount: number;
    success?: boolean;
  };
  success?: boolean;
  message?: string;
  status?: number;
}

export interface ActionApiResponse {
  data: {
    success: boolean;
    message: string;
  };
  status: number;
}
