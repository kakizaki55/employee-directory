import { useState, useContext, createContext, useEffect } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileObj, setProfileObj] = useState({});
  const [shouldQuery, setShouldQuery] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfile();
      setProfileObj(response);
      setShouldQuery(false);
    };
    fetchProfile();
  }, [shouldQuery]);

  const values = { profileObj, setProfileObj, shouldQuery, setShouldQuery };
  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === 'undefined') {
    throw new Error('you must use a useUser inside of a UserProvider');
  } else {
    return context;
  }
};
