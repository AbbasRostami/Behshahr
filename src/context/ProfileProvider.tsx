import { atom } from "jotai";
import { getApi } from "../core/api/api";

interface UserProfile {
  birthDay: string;
  currentPictureAddress: string;
  email: string;
  fName: string;
  gender: boolean;
  homeAdderess: string;
  lName: string;
  latitude: string;
  linkdinProfile: string;
  longitude: string;
  nationalCode: string;
  phoneNumber: string;
  profileCompletionPercentage: number;
  receiveMessageEvent: boolean;
  telegramLink: string;
  userAbout: string;
  userImage: UserImage[];
}

interface UserImage {
  id: string;
  inserDate: string;
  pictureName: string;
  puctureAddress: string;
  userProfileId: number;
}

interface ApiResponse {
  data: UserProfile;
}

export const profileAtom = atom<UserProfile | null>(null);

export const getEditProfAtom = atom(
  null,
  async (get, set) => {
    const path = `/SharePanel/GetProfileInfo`;
    const response = (await getApi({ path })) as ApiResponse;
    set(profileAtom, response?.data);
  }
);
