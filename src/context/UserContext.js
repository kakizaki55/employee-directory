import { useContext, createContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = getUser();
      setUser({ id: response.id, email: response.email });
    };
    fetchUser();
  }, []);

  const values = { user, setUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === 'undefined') {
    throw new Error('you must use a useUser inside of a UserProvider');
  } else {
    return context;
  }
};
