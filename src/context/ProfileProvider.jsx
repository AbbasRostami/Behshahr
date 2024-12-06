import { createContext, useEffect, useState } from 'react'
import { getApi } from '../core/api/api';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const getEditProf = async () => {
        const path = `/SharePanel/GetProfileInfo`;
        const response = await getApi({ path });
        setData(response.data);
      };
      useEffect(() => {
        getEditProf();
      }, []);
    

  return (
    <ProfileContext.Provider value={{data, getEditProf}}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider