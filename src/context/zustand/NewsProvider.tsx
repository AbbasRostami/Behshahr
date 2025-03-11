import { create } from "zustand";
import { getApi } from "../../core/api/api";

interface DataType {
  currentImageAddressTumb: string;
  currentLikeCount: number;
  currentDissLikeCount: number;
  currentRate: number;
  newsCatregoryName: string;
  title: string;
  addUserFullName: string;
  addUserProfileImage: string;
  miniDescribe: string;
  id: number;
}

interface NewsState {
  News: DataType[];
  fetchNews: () => Promise<void>;
  loading: boolean;
}


export const useNewsStore = create<NewsState>((set) => ({
  News: [],
  loading: false,
  fetchNews: async () => {
    set({ loading: true }); 
    try {
      const path = `/News`;
      const response = (await getApi({ path })) as {
        data: { news: DataType[] };
      };
      if (response?.data) {
        set({ News: response.data.news });
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      set({ loading: false }); 
    }
  },
}));

