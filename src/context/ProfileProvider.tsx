import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { getApi } from "../core/api/api";

interface ProfileContextType {
  data: UserProfile | null | undefined;
  getEditProf: () => Promise<void>;
}

export const ProfileContext = createContext<ProfileContextType>({
  data: null,
  getEditProf: async () => {},
});

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
  userImage: UserImage[]
}

// userImage: Array<{ // inline Type
//   inserDate: string;
//   pictureName: string;
//   puctureAddress: string;
//   userProfileId: number;
// }>;

interface UserImage {
  id: string;
  inserDate: string;
  pictureName: string;
  puctureAddress: string;
  userProfileId: number;
}

interface ApiResponse {
    data: UserProfile
}

const ProfileProvider = ({ children }: PropsWithChildren<{}>) => {

  const [data, setData] = useState<UserProfile | null>();

  const getEditProf = async () => {
    const path = `/SharePanel/GetProfileInfo`;
    const response = await (getApi({ path })) as ApiResponse;

  console.log("ContextData: ", data);

    setData(response?.data);
  };

  useEffect(() => {
    getEditProf();
  }, []);

  return (
    <ProfileContext.Provider value={{ data, getEditProf }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
