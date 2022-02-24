import { useContext, createContext, useState, useEffect } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1234151235,
    email: 'Minoka@gmail.com',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = getUser();
      console.log(response.id, response.email);
      setUser(id, email);
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
