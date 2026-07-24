import { atom } from "jotai";
import { getApi } from "../../core/api/api";

interface UserImage {
  id: string;
  inserDate: string;
  pictureName: string;
  puctureAddress: string;
  userProfileId: number;
}

export interface UserProfile {
  id: number;
  fName: string | null;
  lName: string | null;
  userName: string;
  email: string;
  phoneNumber: string | null;
  birthDay: string | null;
  gender: boolean;
  homeAdderess: string | null;
  latitude: string | null;
  longitude: string | null;
  nationalCode: string | null;
  linkdinProfile: string | null;
  telegramLink: string | null;
  userAbout: string | null;
  currentPictureAddress: string | null;
  profileCompletionPercentage: number;
  receiveMessageEvent: boolean;
  userImage: UserImage[];
}

interface ApiResponse {
  data: UserProfile;
}

export const profileAtom = atom<UserProfile | null>(null);

export const getEditProfAtom = atom(null, async (_get, set) => {
  try {
    const path = "/SharePanel/GetProfileInfo";
    const response = (await getApi({ path })) as ApiResponse;

    if (response?.data) {
      set(profileAtom, response.data);
    }
  } catch {}
});
